import axios from 'axios'
const successState = () =>({
    type:'change_login_in',
    value:true
})
export const LoginOut = () =>({
    type:'change_login_out',
    value:false
})
export const loginCheck = (account,password)=>{
    return (dispatch) =>{
        axios.get('/api/login.json?account='+ account +'&password='+password).then((res)=>{
            if(res.data.success){
                dispatch(successState())
            }
        })
    }
}