import { ATM_RESPONSE_LIST } from "./atm.type";

export const actGetResponseAtmList = (atm) => ({
	type: ATM_RESPONSE_LIST,
	payload: atm,
})
