import { SUPPORT_NOW_SEGEMENT_TYPE, SUPPORT_NOW_GET_NO_TYPE_SUCCESS, SUPPORT_NOW_GET_NO_TYPE_FAIL } from "./support-now.type";
import { callApiPost } from '../../callApi/CallApiService';
import { SUPPORT_NOW_NO_TYPE } from "../../configs/const";
export const actSetSupportNowSegementType = (type) => ({
  type: SUPPORT_NOW_SEGEMENT_TYPE,
  payload: type,
})

export const actGetSupportNowNoType = ({ page, maxItems }) => {
  return dispatch => {
    let url = 'faq/search';
    let data = {
      "page": page,
      "maxItems": maxItems,
      "customertype": SUPPORT_NOW_NO_TYPE
    }
    return callApiPost(url, data).done(res => {
      let data = {
        supportNowNoType: res?.faqItems,
        totalItem: res?.totalCount,
      }
      dispatch(actGetSupportNowNoTypeSuccess(data));
    }).catch(err => dispatch(actGetSupportNowNoTypeFail()));
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