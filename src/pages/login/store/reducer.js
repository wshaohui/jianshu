import { fromJS } from 'immutable';
const defaultState = fromJS({
    login:false,
    password:'123',
    account:'wengshaohui'
})
export default (state = defaultState,action) => {
    if(action.type==='change_login_in'){
        return state.set('login',action.value)
    }
    if(action.type==='change_login_out'){
        return state.set('login',action.value)
    }
    return state;
}