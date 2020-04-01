import { SUPPORT_NOW_SEGEMENT_TYPE, SUPPORT_NOW_GET_NO_TYPE_SUCCESS, SUPPORT_NOW_GET_NO_TYPE_FAIL, SUPPORT_NOW_GET_HAS_TYPE_SUCCESS, SUPPORT_NOW_GET_MENU_SUCCESS } from "./support-now.type";
import { callApiPost, callApiGet } from '../../callApi/CallApiService';
import { SUPPORT_NOW_NO_TYPE } from "../../configs/const";
import { forkJoin } from "rxjs";
export const actSetSupportNowSegementType = (type) => ({
  type: SUPPORT_NOW_SEGEMENT_TYPE,
  payload: type,
})

export const actGetSupportNowNoType = ({ page = 1, maxItems = 10 }) => {
  return dispatch => {
    let url = 'faq/search';
    let data = {
      page: page,
      maxItems: maxItems,
      customertype: SUPPORT_NOW_NO_TYPE
    }
    return callApiPost(url, data).subscribe(res => {
      let data = {
        supportNowNoType: res?.response?.faqItems,
        totalItem: res?.response?.totalCount,
      }
      dispatch(actGetSupportNowNoTypeSuccess(data));
    }, err => dispatch(actGetSupportNowNoTypeFail()));
  }
}

export const actGetSupportNowNoTypeSuccess = (data) => {
  return {
    type: SUPPORT_NOW_GET_NO_TYPE_SUCCESS,
    payload: data,
  }
}
export const actGetSupportNowNoTypeFail = () => {
  return {
    type: SUPPORT_NOW_GET_NO_TYPE_FAIL
  }
}

export const actGetSupportNowHasType = ({ page = 1, maxItems = 10, customerType, firstTime = false }) => {
  return dispatch => {
    let searchBody = {
      page,
      maxItems,
      customertype: customerType
    }
    if (firstTime) {
      return forkJoin([
        callApiGet(`faqtag/get?customerType=${customerType}`),
        callApiPost('faq/search', searchBody)
      ]).subscribe(res => {
        dispatch(actGetSupportNowMenuSuccess(res[0].response?.data?.TagCatalogs));
        dispatch(actGetSupportNowHasTypeSuccess({
          data: res[1].response?.faqItems,
          totalCount: res[1].response?.totalCount
        }));
      });
    } else {
      return callApiPost('faq/search', searchBody)
    }
  }
}


export const actGetSupportNowHasTypeSuccess = (data) => {
  return {
    type: SUPPORT_NOW_GET_HAS_TYPE_SUCCESS,
    payload: data,
  }
}

export const actGetSupportNowMenuSuccess = (data) => {
  return {
    type: SUPPORT_NOW_GET_MENU_SUCCESS,
    payload: data,
  }
}



