import FigureSortFilterStatus from './figure-sort-filter-status.js'


export default class FigureControl {

	constructor(data, mapFunction, figures) {
		console.log("TCL: FigureControl -> constructor -> figures", figures)
		console.log("TCL: FigureControl -> constructor -> mapFunction", mapFunction)
		console.log("TCL: FigureControl -> constructor -> data", data)
		this.data = data;
		this.mapFunction = mapFunction;
		this.figures = figures;
		this.sortFilterStatus = new FigureSortFilterStatus();
		console.log("TCL: FigureControl -> constructor -> sortFilterStatus", sortFilterStatus)
		this.numberOfDataSets = 1;
		this.showDataAfterMap;

		this.propComparator = (propName, direction) => (a, b) => {
			if (direction == -1) return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1
			return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
		}
	}



	updateFigures() {
		var data = this.getSortedFilteredData()
		for (var i = 0; i < this.figures.length; i++) {
			this.figures[i].selector
			//$(this.figures[i].selector).html('')
			this.figures[i].generate(data[i])
		}

	}

	getSortedFilteredData() {
		var ret = JSON.parse(JSON.stringify(this.data))
		ret.sort(this.propComparator(this.sortFilterStatus.keyToSortBy, this.sortFilterStatus.sortDirection))
		if (this.debug) {
			console.log(JSON.stringify(ret))
		}
		if (this.sortFilterStatus.isOECDFirst) {
			var oecdIndex = ret.map(function (element) { return element.countryId }).indexOf('IN3');
			ret.unshift(ret.splice(oecdIndex, 1)[0]);
		}
		if (this.sortFilterStatus.isOECDOnly) {
			ret = ret.filter((element) => {
				return _isOECDCountry(element.countryId)
			})
		}
		ret = ret.map(this.mapFunction);

		if (this.numberOfDataSets == 2) {
			var half_length = Math.floor(ret.length / 2);
			return [ret.slice(0, half_length), ret.slice(ret.length / 2, ret.length)];
		}
        console.log("TCL: FigureControl -> getSortedFilteredData -> ret", ret)
		return [ret];
	}

}
