import { ajax } from 'rxjs/ajax';
import { endPoints } from '../configs/endpoint';
export function callApiGet(url, params) {
    return ajax({
        method: 'GET',
        url: endPoints + url,
    })
}

export function callApiPost(url, body) {
    return ajax({
        method: 'POST',
        url: endPoints + url,
        body,
    })
}

export function buildUrl(payload) {
    let params = "?";
    Object.keys(payload).forEach((e, index) => {
        params = params + (index == 0 ? "" : "&") + e + "=" + payload[e];
    });
    return params;
}