import axios from 'axios'
export const LoginAction=(state)=>async(dispatch)=>{
    try {dispatch({type:"LOG_REQUEST"})
    const {data}=await axios.post('url',state)
        dispatch({type:"LOG_SUCCESS",payload:data})
    } catch (error) {
        dispatch({type:"LOG_ERROR",payload:error.message})
    }
}
