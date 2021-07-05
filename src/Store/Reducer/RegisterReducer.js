const InitState = {
   
    loading: false,
    msg: null,
    error: null
}
export const RegisterReducer = (state = InitState, action) => {
    switch (action.type) {
  
        case "REG_REQUEST":
            return { ...state, loading: true }
        case "REG_SUCCESS":
            const {msg}=action.payload
            return { ...state, loading: false, msg:msg }
        case "REG_ERROR":
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}