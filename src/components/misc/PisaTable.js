class PisaTable {
	constructor(tableSelector) {
        console.log("TCL: PisaTable -> constructor -> tableSelector", tableSelector)
		this.tBody = $(tableSelector).find('tbody');
		this.rowHtmlTemplate = '<tr>' + this.tBody.find('tr:eq(0)').html() + '</tr>';
		this.tBody.find('tr:eq(0)').remove();
	}

	addRow(dataRow) {
    console.log("TCL: PisaTable -> addRow -> dataRow", dataRow)
		this.tBody.append(this.rowHtmlTemplate)
	    var lastRow = this.tBody.find('tr:last()')

	    if(dataRow.country == 'United States') {
	      lastRow.find('th:eq(0)').html('<span>' + dataRow.country + '</span>')
	    } else {
	      lastRow.find('th:eq(0)').html(dataRow.country)
	    }

	    for(var i = 1; i < dataRow.values.length; i++) {
	    	lastRow.find('td:eq(' + (i-1)+ ')').html(dataRow.values[i])
	    }

	    if(!dataRow.isOECD) {
	    	lastRow.addClass('not-oecd');
	    }

	    var cell1Content = ''

	    if(dataRow.errorFlag > 0) cell1Content = '<tspan font-size="10px" font-weight="normal" font-style="normal" dx="2" dy="-2">1</tspan>';
	    
		lastRow.find('td:eq(0)').html(dataRow.values[0] + cell1Content)
	    lastRow.find('td:eq(1)').html(Math.round(dataRow.values[1]))
	   
		var content = '';
	    
		if(dataRow.decorators[2] && dataRow.decorators[2].toLowerCase() == 'higher') {
	    	content = '<span class="sig-up" role="img" aria-label="score higher than US average score" title="score higher than US average score"><i class="fas fa-caret-up"></i></span>';
	    } else if(dataRow.decorators[2] && dataRow.decorators[2].toLowerCase() == 'lower') {
	    	content = '<span class="sig-up" role="img" aria-label="score lower than US average score" title="score lower than US average score"><i class="fas fa-caret-down"></i></span>';
	    } else if(dataRow.decorators[2] && dataRow.decorators[2].toLowerCase() == 'equal') {
	    	content = '<span class="sig-up" role="img" aria-label="no significant difference from US average score" title="no significant difference from US average score"><i class="fa fa-diamond"></i></span>';
	    }

      var gap = Math.round(dataRow.values[2]);
     
	  if(gap == 0) gap = '#';
	    lastRow.find('td:eq(2)').html(gap + content)
	    // lastRow.find('td:eq(3)').html(Math.round(dataRow.values[3]))
	    
	    // lastRow.find('td:eq(4)').html(dataRow.values[4])
	    if(dataRow.country == 'United States') {
	      lastRow.addClass('usa')
	    }
	}

	clearTable() {
		console.log('CLEARED TABLE')
		//this.tBody.html('');
	}

	generate(data) {
		this.clearTable();
		for(var i = 0; i < data.length; i++) {
	     	this.addRow(data[i])
	     	// this.updateRow(data[i], i);
    	}
	}
}