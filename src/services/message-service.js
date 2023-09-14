import { Subject } from 'rxjs';



const subject = new Subject();
const subject2 = new Subject();


export const MessageService = {
    sendMessage: message => { console.log('send message'); subject.next({ text: message }) },
    showHide: isShown => { subject2.next(isShown) },
    getMessage: () => subject.asObservable(),
    getHidden: () => subject2.asObservable()
};