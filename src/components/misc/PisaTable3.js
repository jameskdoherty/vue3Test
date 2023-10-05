class PisaTable3 {

  constructor(tableSelector) {
    this.tBody = $(tableSelector).find('tbody');
    this.rowHtmlTemplate = '<tr>' + this.tBody.find('tr:eq(0)').html() + '</tr>';
    this.tBody.find('tr:eq(0)').remove();
  }

  addRow(dataRow) {
    console.log("TCL: PisaTable3 -> addRow -> dataRow", dataRow)
    this.tBody.append(this.rowHtmlTemplate)
    var lastRow = this.tBody.find('tr:last()')

    if (dataRow.rowDecorator) {
      if (dataRow.rowDecorator.addClass) {
        lastRow.addClass(dataRow.rowDecorator.addClass)
      }
    }
    for (var i = 0; i < dataRow.headers.length; i++) {
      var content = dataRow.headers[i];
      if (dataRow.headerDecorators && dataRow.headerDecorators[i]) {
        if (dataRow.headerDecorators[i].addClass) {
          lastRow.find('th:eq(' + i + ')').addClass(dataRow.headerDecorators[i].addClass)
        }
        if (dataRow.headerDecorators[i].addParent) {
          content = '<' + datarow.headerDecorators[i].addParent + '>' + content + '</' + datarow.headerDecorators[i].addParent + '>'
        }
      }
      lastRow.find('th:eq(' + i + ')').html(content)
    }
    for (var i = 0; i < dataRow.values.length; i++) {
      lastRow.find('td:eq(' + i + ')').html(dataRow.values[i])
    }
  }

  clearTable() {
    this.tBody.html('');
  }

  generate(data) {
    console.log("TCL: PisaTable -> generate -> data", data)
    this.clearTable();
    for (var i = 0; i < data.length; i++) {
      this.addRow(data[i])
      // this.updateRow(data[i], i);
    }
  }
}