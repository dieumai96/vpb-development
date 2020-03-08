export const seachPayload = {
}

export const BranchATMReducer = (state, action) => {
  switch (action.type) {
    case 'update_payload': {

      return {
        ...state,
        seachPayload: {
          keyword: action.payload.keyword
        }
      };
    }
    default:
      return state
  }
}
