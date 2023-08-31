import { Subject } from 'rxjs';

const figureSortFilterSubject = new Subject();



export const FigureSortFilterStatus = {

    getKeyToSortBy: () => figureSortFilterSubject.asObservable(),
    setKeyToSortBy: (key) => {

        keyToSortBy = 'gap';
        sortDirection = -1;
        isOECDOnly = true;
        isOECDFirst = true;

        if (key == this.keyToSortBy) {
            this.sortDirection = -this.sortDirection;
            return figureSortFilterSubject.next(this.sortDirection)
        } else {
            this.keyToSortBy = key;
            this.sortDirection = (this.keyToSortBy == 'country') ? 1 : -1
        }


    }

}