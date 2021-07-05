const InitState = {
   
    loading: false,
    msg: null,
    error: null,
    token:null
}
export const LoginReducer = (state = InitState, action) => {
    switch (action.type) {
        case "LOG_REQUEST":
            return { ...state, loading: true }
        case "LOG_SUCCESS":
            const {token,msg}=action.payload
            return { ...state, loading: false, msg:msg,token:token }
        case "LOG_ERROR":
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}