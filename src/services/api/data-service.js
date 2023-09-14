import { Subject, forkJoin, of, switchMap, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fromFetch } from 'rxjs/fetch';
import { catchError, mergeMap, takeUntil, tap } from 'rxjs/operators';


const chartM7Subject = new Subject();
const chartM8Subject = new Subject();
const chartM8SubjectA = new Subject();
const chartM9Subject = new Subject();
const tableM7Subject = new Subject();

const url = `http://poseidon.research.ets.org/surveys/idedataservice/getadhocdata.aspx?`;
const query = `UseCache=true&type=sigacrossjuris&subject=RMS&cohort=1&subscale=PVMATH&variable=C8ESCSUSQ&jurisdiction=USA,IN3&stattype=MN:MN&Year=2022&Program=PISA`;
const jdataurl = `https://jsonplaceholder.typicode.com/todos/1`

export const DataService = {
    getChartM7Data: () => chartM7Subject.asObservable(),
    getTableM7Data: () => tableM7Subject.asObservable(),
    getChartM8Data: () => chartM8Subject.asObservable(),
    getChartM8DataA: () => chartM8SubjectA.asObservable(),
    getChartM9Data: () => chartM9Subject.asObservable(),
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
    createChartM9: () => {
        ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/4`).subscribe(allResults => {
            return chartM9Subject.next(allResults)
        })
    },
    createTableM7: () => {
        ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/4`).subscribe(allResults => {
            return tableM7Subject.next(allResults)
        })
    },
    createChartM8A: () => {

        // fromFetch(url+query).pipe(mergeMap((response) => response.text()),
        // takeUntil(timer(15e3))
        // ).subscribe((text) => console.log('text',text));
        console.log('CREATECHARTM8A')

        fromFetch(url + query).pipe(
            switchMap(response => {
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
            return chartM8SubjectA.next(allResults)
        });


    },
};


// catchError(error => of(error))).subscribe(allResults => {
//     return chartM8Subject.next(allResults)
// }