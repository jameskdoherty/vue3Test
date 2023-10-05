import { Subject } from 'rxjs';



const subject = new Subject();
const subject2 = new Subject();
const subjectComparator = new Subject();


export const MessageService = {
    sendMessage: message => { console.log('send message'); subject.next({ text: message }) },
    showHide: isShown => { subject2.next(isShown) },
    sendComparator: (propName, direction) => (a, b) => {
        console.log('sendcomparator')
            if (direction == -1) return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1
            return subjectComparator.next(a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1)
    },
    getMessage: () => subject.asObservable(),
    getHidden: () => subject2.asObservable(),
    getComparator: () => subjectComparator.asObservable(),
};