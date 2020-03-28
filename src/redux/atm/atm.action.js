import { ATM_RESPONSE_LIST, LOCALTION } from "./atm.type";

export const actGetResponseAtmList = (atm) => ({
	type: ATM_RESPONSE_LIST,
	payload: atm,
})

export const actGetLocaltion = (location) => ({
	type: LOCALTION,
	payload: location,
})
