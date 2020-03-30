import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { endPoints } from '../configs/endpoint';
import { of } from 'rxjs';
import axios from 'axios';
import * as $ from 'jquery';
export function callApiGet({ url, params }) {
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

export function callApiPost(url, body) {
    return $.ajax({
        method: 'POST',
        url : endPoints + url,
        data : body,
    })
}

export function buildUrl(payload) {
    let params = "?";
    Object.keys(payload).forEach((e, index) => {
        params = params + (index == 0 ? "" : "&") + e + "=" + payload[e];
    });
    return params;
}