import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { endPoints } from '../configs/endpoint';
import { of } from 'rxjs';
export function callApiGet({url, params}) {
    return ajax({
        method: 'GET',
        url: endPoints + url,
        headers: {
            params
        },
    }).pipe(map(data => data), catchError(err => {
        console.error(err);
        of(err);
    }))
}
