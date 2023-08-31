import { Subject, forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const chartM7Subject = new Subject();
const chartM8Subject = new Subject();
const chartM9Subject = new Subject();
const tableM7Subject = new Subject();

export const DataService = {
    getChartM7Data: () => chartM7Subject.asObservable(),
    getTableM7Data: () => tableM7Subject.asObservable(),
    getChartM8Data: () => chartM8Subject.asObservable(),
    getChartM9Data: () => chartM9Subject.asObservable(),
    createChartM7: () => {

        forkJoin([
            ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/1`),
            ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/2`)
        ]).subscribe(allResults => {
        console.log("TCL: allResults", allResults)
            return chartM7Subject.next(allResults)

        });
    },
    createChartM8: () => {
        ajax.getJSON(`http://poseidon.research.ets.org/surveys/idedataservice/getadhocdata.aspx?UseCache=true&type=sigacrossjuris&subject=RMS&cohort=1&subscale=PVMATH&variable=C8ESCSUSQ&jurisdiction=USA,IN3&stattype=MN:MN&Year=2022&Program=PISA`)
                .pipe(
                    catchError(error => of(error))
                ).subscribe(allResults => {
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
    }
};


// catchError(error => of(error))).subscribe(allResults => {
//     return chartM8Subject.next(allResults)
// }