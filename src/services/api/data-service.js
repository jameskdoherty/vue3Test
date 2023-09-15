import { Subject, forkJoin, of, switchMap, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fromFetch } from 'rxjs/fetch';
import { catchError, mergeMap, takeUntil, tap } from 'rxjs/operators';
import chart9MathTotal from '../../assets/testdata/chart9MathTotal.json';
import chart9Math from '../../assets/testdata/chart9Math.json';


const chartM7Subject = new Subject();
const chartM8Subject = new Subject();
const chartEightSubject = new Subject();
const chartNineSubject = new Subject();
const chartM9Subject = new Subject();
const tableM7Subject = new Subject();

const domain = `http://poseidon.research.ets.org/surveys/idedataservice/getadhocdata.aspx?`;
const variable = 'C8ESCSUSQ';
const queryBegin = `UseCache=true&type=sigacrossjuris&subject=RMS&cohort=1&`;
const queryVariable = `&variable=${variable}`;
const queryEnd = `&jurisdiction=USA,IN3&stattype=MN:MN&Year=2022&Program=PISA`;


//const jdataurl = `https://jsonplaceholder.typicode.com/todos/1`

export const DataService = {
    getChartM7Data: () => chartM7Subject.asObservable(),
    getTableM7Data: () => tableM7Subject.asObservable(),
    getChartM8Data: () => chartM8Subject.asObservable(),
    getChartEightData: () => chartEightSubject.asObservable(),
    getChartNineData: () => chartM7Subject.asObservable(),
    createChartM7: () => {
        forkJoin([
            ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/1`),
            ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/2`)
        ]).subscribe(allResults => {
            console.log("TCL: create chart7 allResults", allResults)
            return chartM7Subject.next(allResults)
        });
    },
    createChartM8: () => {
        ajax.getJSON(`https://poseidon.research.ets.org/surveys/idedataservice/getadhocdata.aspx?UseCache=true&type=sigacrossjuris&subject=RMS&cohort=1&subscale=PVMATH&variable=C8ESCSUSQ&jurisdiction=USA,IN3&stattype=MN:MN&Year=2022&Program=PISA`)
            .pipe(
                catchError(error => of(error))
            ).subscribe(allResults => {
                console.log("TCL: createChartM8 allResults", allResults)
                return chartM8Subject.next(allResults)
            })
    },
    createChartM9: (subScale) => {
        console.log("TCL: createChartM9 this.section", subScale);
        forkJoin([
            ajax.getJSON(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=total&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2018&Program=PISA`),
            ajax.getJSON(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=SD010501&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2018&Program=PISA`)
        ]).subscribe(allResults => {
            console.log("TCL: create chartM9 allResults", allResults)
            return chartM9Subject.next(allResults)
        });
    },
    createTableM7: () => {
        ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/4`).subscribe(allResults => {
            return tableM7Subject.next(allResults)
        })
    },
    createChartEight: (subScale) => {
        console.log("TCL: this.section", subScale);
        fromFetch(domain + queryBegin + `subscale=${subScale}` + queryVariable + queryEnd).pipe(
            switchMap(response => {
                console.log('chart8 chart9', response);
                if (response.ok) {
                    return response.json()
                } else {
                    console.log('do something else')
                }
            }),
            catchError(err => {
                console.log(err);
                return of({ error: true, message: err.message })
            })
        ).subscribe(result => {
            let allResults = result.result
            console.log("TCL: createChartM8A allResults", allResults)
            return chartEightSubject.next(allResults)
        });


    },
    createChartNine: (subScale) => {
        console.log("TCL: CHART9 this.section", subScale);
        forkJoin([
            fromFetch(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=total&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2018&Program=PISA`).pipe(
                switchMap(response => {
                    console.log('a chart9', response);
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('do something else')
                        return chart9MathTotal
                    }
                }),
            ),
            fromFetch(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=SD010501&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2018&Program=PISA`).pipe(
                switchMap(response => {
                    console.log('b chart9', response);
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('do something else')
                        return chart9Math
                    }
                }),
            )
        ]).subscribe(result => {
            console.log('chart9 result',result)
            let chartNineResults = [];

            result.forEach((element, index, array) => {
                chartNineResults.push(element.result)
            })

           
            console.log("TCL: chart 7 Chart9 chartNineResults", chartNineResults)
            return chartM7Subject.next(chartNineResults)
        });



    },
};


// catchError(error => of(error))).subscribe(allResults => {
//     return chartM8Subject.next(allResults)
// }