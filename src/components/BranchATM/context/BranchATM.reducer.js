export const seachPayload = {
}

export const BranchATMReducer = (state, action) => {
  switch (action.type) {
    case 'update_payload': {
      return {
        ...state,
        seachPayload: action.payload
      };
    }
    case 'branch_atm_response': {
      return {
        ...state,
        response: action.payload,
      }
    }
    default:
      return state
  }
}
