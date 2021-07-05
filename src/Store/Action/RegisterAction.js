import axios from 'axios'
export const RegisterAction=(state)=>async(dispatch)=>{
    try {dispatch({type:"REG_REQUEST"})
    const {data}=await axios.post('url',state)
        dispatch({type:"REG_SUCCESS",payload:data})
    } catch (error) {
        dispatch({type:"REG_ERROR",payload:error.message})
    }
}

