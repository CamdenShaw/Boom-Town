const AUTHORIZED = "AUTHORIZED"
const NO_AUTH = "NO_AUTH"

export const userAuthorized = (user) => ({
  type: AUTHORIZED,
  user
})

export const notAuthorized = () => ({
  type: NO_AUTH
})

export default function(state = { user: null }, action) {
  switch(action.type){
    case AUTHORIZED:
      return {
        ...state,
        user: action.user
      }
    case NO_AUTH:
      return {
        ...state,
        user: null
      }
    default:
      return {
        state
      }
  }
}