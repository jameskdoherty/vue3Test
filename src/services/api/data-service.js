import { Subject, forkJoin, of, switchMap, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fromFetch } from 'rxjs/fetch';
import { catchError, mergeMap, takeUntil, tap } from 'rxjs/operators';
import chart9MathTotal from '../../assets/testdata/chart9MathTotal.json';
import chart9Math from '../../assets/testdata/chart9Math.json';






const chartM7Subject = new Subject();
const chartM8Subject = new Subject();
const chartEightSubject = new Subject();
const tableEightSubject = new Subject();
const tableSixSubject = new Subject();
const chartSixSubject = new Subject();
const tableOneSubject = new Subject();
const tableTwoSubject = new Subject();
const tableThreeSubject = new Subject();
const tableFourASubject = new Subject();
const tableFourBSubject = new Subject();
const tableFiveSubject = new Subject();
const tableNineSubject = new Subject();
const chartNineSubject = new Subject();
const chartM9Subject = new Subject();
const tableM7Subject = new Subject();

const domain = `http://poseidon.research.ets.org/surveys/idedataservice/getadhocdata.aspx?`;
const variable = 'C8ESCSUSQ';
const firstYear = '2003';
const type = 'gaponpercentileacrossjuris'
const queryBegin = `UseCache=true&type=sigacrossjuris&subject=RMS&cohort=1&`;
const queryVariable = `&variable=${variable}`;
const jurisdictionAUS_VNM = `AUS,AUT,BEL,CAN,CHL,COL,CRI,CZE,DNK,EST,FIN,FRA,DEU,GRC,HUN,ISL,IRL,ISR,ITA,JPN,KOR,LVA,LUX,MEX,NLD,NZL,NOR,POL,PRT,SVK,SVN,ESP,SWE,CHE,TUR,GBR,USA,ALB,DZA,ARG,AZE,BAK,BLR,BIH,BRA,BRN,QCH,QCI,ARG01,BGR,KHM,TAP,HRV,QCY,DOM,ARE03,SLV,GEO,GTM,HKG,IDN,JAM,JOR,KAZ,KSV,KGZ,LBN,LIE,LTU,MAC,MYS,MLT,MDA,MNG,MNE,MAR,MKD,PSE,PAN,PRY,PER,PHL,QAT,ROU,RUS,SAU,YUG,SRB,QCN,SGP,THA,TTO,TUN,UKR,QUR,ARE,URY,UZB,VNM`
const queryEnd = `&jurisdiction=USA,IN3&stattype=MN:MN&Year=2022&Program=PISA`;
const queryEndSix = `&jurisdiction=IN3,AUS,AUT,BEL,CAN,CHL,COL,CRI,CZE,DNK,EST,FIN,FRA,DEU,GRC,HUN,ISL,IRL,ISR,ITA,JPN,KOR,LVA,LUX,MEX,NLD,NZL,NOR,POL,PRT,SVK,SVN,ESP,SWE,CHE,TUR,GBR,USA,ALB,DZA,ARG,AZE,BAK,BLR,BIH,BRA,BRN,QCH,QCI,ARG01,BGR,KHM,TAP,HRV,QCY,DOM,ARE03,SLV,GEO,GTM,HKG,IDN,JAM,JOR,KAZ,KSV,KGZ,LBN,LIE,LTU,MAC,MYS,MLT,MDA,MNG,MNE,MAR,MKD,PSE,PAN,PRY,PER,PHL,QAT,ROU,RUS,SAU,YUG,SRB,QCN,SGP,THA,TTO,TUN,UKR,QUR,ARE,URY,UZB,VNM&stattype=MN:MN&Year=2022&Program=PISA`


let allCountriesWithoutUSA = [
    'IN3', 'AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'COL', 'CRI', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'ISL', 'IRL',
    'ISR', 'ITA', 'JPN', 'KOR', 'LVA', 'LUX', 'MEX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TUR',
    'GBR', 'ALB', 'DZA', 'ARG', 'AZE', 'BAK', 'BLR', 'BIH', 'BRA', 'BRN', 'QCH', 'QCI', 'ARG01', 'BGR', 'KHM', 'TAP', 'HRV', 'QCY',
    'DOM', 'ARE03', 'SLV', 'GEO', 'GTM', 'HKG', 'IDN', 'JAM', 'JOR', 'KAZ', 'KSV', 'KGZ', 'LBN', 'LIE', 'LTU', 'MAC', 'MYS', 'MLT',
    'MDA', 'MNG', 'MNE', 'MAR', 'MKD', 'PSE', 'PAN', 'PRY', 'PER', 'PHL', 'QAT', 'ROU', 'RUS', 'SAU', 'YUG', 'SRB', 'QCN', 'SGP', 'THA',
    'TTO', 'TUN', 'UKR', 'QUR', 'ARE', 'URY', 'UZB', 'VNM'
];

//const jdataurl = `https://jsonplaceholder.typicode.com/todos/1`

export const DataService = {
    getChartM7Data: () => chartM7Subject.asObservable(),
    getTableM7Data: () => tableM7Subject.asObservable(),
    getTable1Data: () => tableOneSubject.asObservable(),
    getTable2Data: () => tableTwoSubject.asObservable(),
    getTable3Data: () => tableThreeSubject.asObservable(),
    getTable4AData: () => tableFourASubject.asObservable(),
    getTable4BData: () => tableFourBSubject.asObservable(),
    getTable5Data: () => tableFiveSubject.asObservable(),
    getChartM8Data: () => chartM8Subject.asObservable(),
    getChartEightData: () => chartEightSubject.asObservable(),
    getTableSixData: () => tableSixSubject.asObservable(),
    getChartSixData: () => chartSixSubject.asObservable(),
    getTableEightData: () => tableEightSubject.asObservable(),
    getTableNineData: () => tableNineSubject.asObservable(),
    getChartNineData: () => chartNineSubject.asObservable(),
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
        console.log("TCL: createChartM8", createChartM8)

        // ajax.getJSON(`https://poseidon.research.ets.org/surveys/idedataservice/getadhocdata.aspx?UseCache=true&type=sigacrossjuris&subject=RMS&cohort=1&subscale=PVMATH&variable=C8ESCSUSQ&jurisdiction=USA,IN3&stattype=MN:MN&Year=2022&Program=PISA`)
        //     .pipe(
        //         catchError(error => of(error))
        //     ).subscribe(allResults => {
        //         console.log("TCL: createChartM8 allResults", allResults)
        //         return chartM8Subject.next(allResults)
        //     })
    },
    createChartM9: (subScale) => {
        console.log("TCL: createChartM9 this.section", subScale);
        // forkJoin([
        //     ajax.getJSON(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=total&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2018&Program=PISA`),
        //     ajax.getJSON(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=SD010501&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2018&Program=PISA`)
        // ]).subscribe(allResults => {
        //     console.log("TCL: create chartM9 allResults", allResults)
        //     return chartM9Subject.next(allResults)
        // });
    },
    createChartEight: (subScale) => {
        console.log("TCL: this.section", subScale);
        fromFetch(domain + queryBegin + `subscale=${subScale}` + queryVariable + queryEnd).pipe(
            switchMap(response => {
                console.log('chart8', response);
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
    createTable8: (subScale) => {
        console.log("TCL: CREATE TABLE 8 this.section", subScale);
        fromFetch(domain + queryBegin + `subscale=${subScale}` + `&variable=C8ESCSUSQ` + queryEnd).pipe(
            switchMap(response => {
                console.log('table8 ', response);
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
            console.log("TCL: table8 allResults", allResults)
            return tableEightSubject.next(allResults)
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
            console.log('chart9 result', result)
            let chartNineResults = [];

            result.forEach((element, index, array) => {
                chartNineResults.push(element.result)
            })


            console.log("TCL: chart 7 Chart9 chartNineResults", chartNineResults)
            return chartNineSubject.next(chartNineResults)
        });
    },
    createTable7: (subScale) => {
        console.log("TCL: TABLE7 this.section", subScale);
        forkJoin([
            fromFetch(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=total&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2022&Program=PISA`).pipe(
                switchMap(response => {
                    console.log('a table7', response);
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('do something else')
                        return chart9MathTotal
                    }
                }),
            ),
            fromFetch(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=RACE03&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2022&Program=PISA`).pipe(
                switchMap(response => {
                    console.log('b table7', response);
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('do something else')
                        return chart9Math
                    }
                }),
            )
        ]).subscribe(result => {
            console.log('table7 result', result)
            let chartNineResults = [];

            result.forEach((element, index, array) => {
                chartNineResults.push(element.result)
            })


            console.log("TCL: table 7 ", chartNineResults)
            return tableM7Subject.next(chartNineResults)
        });
    },
    createTable9: (subScale) => {
        console.log("TCL: TABLE9 this.section", subScale);
        forkJoin([
            fromFetch(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=total&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2022&Program=PISA`).pipe(
                switchMap(response => {
                    console.log('a table7', response);
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('do something else')
                        return chart9MathTotal
                    }
                }),
            ),
            fromFetch(domain + `UseCache=true&type=data&subject=RMS&cohort=1&subscale=${subScale}&variable=RACE03&jurisdiction=USA&stattype=MN:MN,RP:RP&Year=2022&Program=PISA`).pipe(
                switchMap(response => {
                    console.log('b table7', response);
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('do something else')
                        return chart9Math
                    }
                }),
            )
        ]).subscribe(result => {
            console.log('table9 result', result)
            let tableNineResults = [];

            result.forEach((element, index, array) => {
                tableNineResults.push(element.result)
            })


            console.log("TCL: table 9 ", tableNineResults)
            return tableNineSubject.next(tableNineResults)
        });
    },
    createTable6: (subScale) => {
        console.log("TCL: this.section", subScale);
        fromFetch(domain + queryBegin + `subscale=${subScale}` + `&variable=ST004301` + queryEndSix).pipe(
            switchMap(response => {
                console.log('table6 ', response);
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
            console.log("TCL: table6 allResults", allResults)
            return tableSixSubject.next(allResults)
        });
    },
    createChart6: (subScale) => {
        console.log("TCL: chart 6 this.section", subScale);
        console.log("TCL: chart 6 domain", domain);
        fromFetch(`${domain}UseCache=true&type=sigacrossvalue&subject=RMS&cohort=1&subscale=${subScale}&variable=ST004301&jurisdiction=IN3,AUS,AUT,BEL,CAN,CHL,COL,CRI,CZE,DNK,EST,FIN,FRA,DEU,GRC,HUN,ISL,IRL,ISR,ITA,JPN,KOR,LVA,LUX,MEX,NLD,NZL,NOR,POL,PRT,SVK,SVN,ESP,SWE,CHE,TUR,GBR,USA,ALB,DZA,ARG,AZE,BAK,BLR,BIH,BRA,BRN,QCH,QCI,ARG01,BGR,KHM,TAP,HRV,QCY,DOM,ARE03,SLV,GEO,GTM,HKG,IDN,JAM,JOR,KAZ,KSV,KGZ,LBN,LIE,LTU,MAC,MYS,MLT,MDA,MNG,MNE,MAR,MKD,PSE,PAN,PRY,PER,PHL,QAT,ROU,RUS,SAU,YUG,SRB,QCN,SGP,THA,TTO,TUN,UKR,QUR,ARE,URY,UZB,VNM&stattype=MN:MN&Year=2022&Program=PISA`).pipe(
            switchMap(response => {
                console.log('chart6 ', response);
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
            console.log("TCL: chart6 allResults", allResults)
            return chartSixSubject.next(allResults)
        });

    },
    createTable1: (subScale) => {
        console.log("TCL: this.section", subScale);

        fromFetch(`${domain}${queryBegin}subscale=${subScale}&variable=TOTAL${queryEndSix}`).pipe(
            switchMap(response => {
                console.log('table1 ', response);
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
            return tableOneSubject.next(allResults)
        });
    },
    createTable3: (subScale) => {
        console.log("TCL: TABLE3 this.section", subScale);

        forkJoin([
            fromFetch(`http://poseidon.research.ets.org/surveys/idedataservice/getadhocdata.aspx?UseCache=true&type=gaponpercentileacrossjuris&subject=RMS&cohort=1&subscale=PVMATH&variable=TOTAL&jurisdiction=IN3,AUS,AUT,BEL,CAN,CHL,COL,CRI,CZE,DNK,EST,FIN,FRA,DEU,GRC,HUN,ISL,IRL,ISR,ITA,JPN,KOR,LVA,LUX,MEX,NLD,NZL,NOR,POL,PRT,SVK,SVN,ESP,SWE,CHE,TUR,GBR,USA,ALB,DZA,ARG,AZE,BAK,BLR,BIH,BRA,BRN,QCH,QCI,ARG01,BGR,KHM,TAP,HRV,QCY,DOM,ARE03,SLV,GEO,GTM,HKG,IDN,JAM,JOR,KAZ,KSV,KGZ,LBN,LIE,LTU,MAC,MYS,MLT,MDA,MNG,MNE,MAR,MKD,PSE,PAN,PRY,PER,PHL,QAT,ROU,RUS,SAU,YUG,SRB,QCN,SGP,THA,TTO,TUN,UKR,QUR,ARE,URY,UZB,VNM&stattype=PC:P1,PC:P9&Year=2022&Program=PISA`).pipe(
                switchMap(response => {
                    // console.log('a table3', response);
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('do something else')
                        //return chart9MathTotal
                    }
                }),
            ),
            fromFetch(`http://poseidon.research.ets.org/surveys/idedataservice/getadhocdata.aspx?UseCache=true&type=gaponpercentileacrossjuris&subject=RMS&cohort=1&subscale=PVMATH&variable=TOTAL&jurisdiction=IN3,AUS,AUT,BEL,CAN,CHL,COL,CRI,CZE,DNK,EST,FIN,FRA,DEU,GRC,HUN,ISL,IRL,ISR,ITA,JPN,KOR,LVA,LUX,MEX,NLD,NZL,NOR,POL,PRT,SVK,SVN,ESP,SWE,CHE,TUR,GBR,USA,ALB,DZA,ARG,AZE,BAK,BLR,BIH,BRA,BRN,QCH,QCI,ARG01,BGR,KHM,TAP,HRV,QCY,DOM,ARE03,SLV,GEO,GTM,HKG,IDN,JAM,JOR,KAZ,KSV,KGZ,LBN,LIE,LTU,MAC,MYS,MLT,MDA,MNG,MNE,MAR,MKD,PSE,PAN,PRY,PER,PHL,QAT,ROU,RUS,SAU,YUG,SRB,QCN,SGP,THA,TTO,TUN,UKR,QUR,ARE,URY,UZB,VNM&stattype=PC:P1,PC:P9&Year=2022&Program=PISA`).pipe(
                switchMap(response => {
                    // console.log('b table3', response);
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log('do something else')
                        //return chart9Math
                    }
                }),
            )
        ]).subscribe(result => {
            let tableResults = [];
            result.forEach((element, index, array) => {
                tableResults.push(element.result)
            })
            console.log("TCL: table 3 ", tableResults)
            return tableThreeSubject.next(tableResults)
        });
    },
    createTable4A: (subScale) => {
        console.log("TCL: this.section", subScale);
        fromFetch(`${domain}UseCache=true&type=sigacrossyear&subject=RMS&cohort=1&subscale=${subScale}&variable=TOTAL&jurisdiction=${jurisdictionAUS_VNM}&stattype=MN:MN&Year=${firstYear},2022&Program=PISA`).pipe(
            switchMap(response => {
                console.log('createTable4A ', response);
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
            console.log("TCL: createTable4A allResults", allResults)
            return tableFourASubject.next(allResults)
        });
    },
    createTable4B: (subScale) => {
        console.log("TCL: this.section", subScale);
        fromFetch(`${domain}UseCache=true&type=sigacrossyear&subject=RMS&cohort=1&subscale=${subScale}&variable=TOTAL&jurisdiction=${jurisdictionAUS_VNM}&stattype=MN:MN&Year=2018,2022&Program=PISA`).pipe(
            switchMap(response => {
                console.log('createTable4B ', response);
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
            console.log("TCL: DATASERVICE createTable4B allResults", allResults)
            return tableFourBSubject.next(allResults)
        });
    },
    createTable5: (subScale) => {
        console.log("TCL: this.section", subScale);
        fromFetch(`${domain}UseCache=true&type=sigacrossyear&subject=RMS&cohort=1&subscale=${subScale}&variable=TOTAL&jurisdiction=USA&stattype=MN:MN,PC:P1,PC:P2,PC:P7,PC:P9&Year=2003,2006,2009,2012,2015,2018,2022&Program=PISA`).pipe(
            switchMap(response => {
                console.log('createTable5 ', response);
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
            console.log("TCL: DATASERVICE createTable5 allResults", allResults)
            return tableFiveSubject.next(allResults)
        });
    },
    createTable2: (subScale) => {
        console.log("TCL: table2 this.section", subScale);
        let callsArray = [];


        allCountriesWithoutUSA.map(function (element) {
            callsArray.push(`${domain}UseCache=true&type=sigacrossjuris&subject=RMS&cohort=1&subscale=${subScale}&variable=BMSCIE&jurisdiction=${element},USA&stattype=RP:RP&Year=2022&Program=PISA&collapse=BMSCIE:1-2-3-4-BelowLevel2,BMSCIE:8-9-FiveAndAbove`)
        })

        console.log('callsarray length', callsArray.length)

        forkJoin([
            fromFetch(callsArray[0]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[1]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[2]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[3]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[4]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[5]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[6]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[7]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[8]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[9]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[10]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[11]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                })),
            fromFetch(callsArray[12]).pipe(
                switchMap(response => {
                    console.log('a table2', response);
                    if (response.ok) {
                        return response.json()
                    }
                }))

        ]).subscribe(result => {
            let tableResults = [];
            result.forEach((element, index, array) => {
                tableResults.push(element.result)
            })
            console.log("TCL: table 2 ", tableResults)
            return tableTwoSubject.next(tableResults)
        });

    },
};



