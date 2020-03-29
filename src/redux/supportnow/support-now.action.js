import { SUPPORT_NOW_SEGEMENT_TYPE } from "./support-now.type";

export const actSetSupportNowSegementType = (type) => ({
  type: SUPPORT_NOW_SEGEMENT_TYPE,
  payload: type,
})

