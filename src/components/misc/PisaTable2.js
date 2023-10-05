import PisaTable from './PisaTable'

class PisaTable2 extends PisaTable {
    addRow(dataRow) {
      this.tBody.append(this.rowHtmlTemplate)
      var lastRow = this.tBody.find('tr:last()')
      // console.log(JSON.stringify(dataRow))
      if(dataRow.country == 'United States') {
        lastRow.find('th:eq(0)').html('<span>' + dataRow.statType + '</span>')
      } else {
        lastRow.find('th:eq(0)').html(dataRow.statType)
      }
      for(var i = 0; i < dataRow.values.length; i++) {
        if(dataRow.decorators[i] == 'HIGHER' || dataRow.decorators[i] == 'LOWER')
            lastRow.find('td:eq(' + i + ')').html(dataRow.values[i] + '*')
        else  
            lastRow.find('td:eq(' + i + ')').html(dataRow.values[i])
      }
    }   
  }
  