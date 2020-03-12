import { BehaviorSubject } from 'rxjs';

const initResponseData = new BehaviorSubject(null);

const responseDataList = initResponseData().asObservable();

const emitResponseList = (data) => initResponseData().next(data);

const completeCallResponseList = () => initResponseData().complete();