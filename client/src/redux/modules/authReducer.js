const AUTHORIZED = "AUTHORIZED"
const NO_AUTH = "NO_AUTH"
const LOADING = "LOADING"

const begin = () => ({
    type: LOADING
})

export const userAuthorized = user => ({
    type: AUTHORIZED,
    isLoading: false,
    user
})

export const notAuthorized = () => ({
    type: NO_AUTH
})

export default function(state = { auth: null, user: null, isLoading: null }, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        case AUTHORIZED:
            return {
                ...state,
                user: action.user,
                userId: action.user.uid,
                isLoading: false,
                auth: true
            }
        case NO_AUTH:
            return {
                ...state,
                user: false,
                isLoading: false,
                auth: false
            }
        default:
            return {
                state
            }
    }
}
