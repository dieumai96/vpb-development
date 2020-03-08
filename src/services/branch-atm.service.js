import { callApiGet } from '../callApi/CallApiService';
export function getBranchAtm(payload = {
    keyword: '',
    city: '',
    district: ''
}) {
    return callApiGet({
        url: 'branchandatm/searchbranchesandatms' + buildUrl(payload),
    })
}


export function buildUrl(payload) {
    let params = "?";
    Object.keys(payload).forEach((e, index) => {
        params = params + (index == 0 ? "" : "&") + e + "=" + payload[e];
    });
    return params;
}