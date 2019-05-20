import { ADD, GET_SECRETS } from '../actions/actions'


const initialState = {
  secrets: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        secrets: [...state.secrets, name]
      }
    case GET_SECRETS:
    return {
      ...state,
      secrets: action.secrets
    }
    default:
      return state
  }
}

export default reducer;