
import { fromJS } from 'immutable';
const defaultState= fromJS({
    title:'',
    content:''
});
export default (state = defaultState,action)=>{
    if(action.type==='get_init_data'){
        return state.merge({
            title:action.title,
            content:action.content
        })
    }
    return state
}