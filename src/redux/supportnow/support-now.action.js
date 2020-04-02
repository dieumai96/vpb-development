import { SUPPORT_NOW_SEGEMENT_TYPE, SUPPORT_NOW_GET_NO_TYPE_SUCCESS, SUPPORT_NOW_GET_NO_TYPE_FAIL, SUPPORT_NOW_GET_HAS_TYPE_SUCCESS, SUPPORT_NOW_GET_MENU_SUCCESS, SUPPORT_NOW_RESET_SEGMENT, SUPPORT_NOW_ADD_TAG, SUPPORT_NOW_REMOVE_TAG } from "./support-now.type";
import { callApiPost, callApiGet } from '../../callApi/CallApiService';
import { SUPPORT_NOW_NO_TYPE } from "../../configs/const";
import { forkJoin } from "rxjs";
export const actSetSupportNowSegementType = ({ type, title }) => ({
  type: SUPPORT_NOW_SEGEMENT_TYPE,
  payload: {
    type,
    title,
  }
})


export const actResetSupportNowSegement = (data) => {
  return {
    type: SUPPORT_NOW_RESET_SEGMENT,
  }
}

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
    console.log(searchBody);
    return forkJoin([
      callApiGet(`faqtag/get?customerType=${customerType}`),
      callApiPost('faq/search', searchBody)
    ]).subscribe(res => {
      const [menu, data] = res;
      dispatch(actGetSupportNowMenuSuccess(menu.response?.data?.TagCatalogs));
      dispatch(actGetSupportNowHasTypeSuccess({
        data: data.response?.faqItems,
        totalCount: data.response?.totalCount
      }));
    });
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

export const actAddTag = (data) => {
  return {
    type: SUPPORT_NOW_ADD_TAG,
    payload: data,
  }
}

export const actRemoveTag = (data) => {
  return {
    type: SUPPORT_NOW_REMOVE_TAG,
    payload: data,
  }
}




