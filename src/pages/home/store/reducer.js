
import { fromJS } from 'immutable';
const defaultState= fromJS({
    topicList:[],
    listItem:[],
    recommendList:[],
    listItempage:1,
    showScroll:false
});
export default (state = defaultState,action)=>{
    if(action.type==='init_home_data'){
        return state.merge({
            topicList:fromJS(action.topicList),
            listItem:fromJS(action.listItem),
            recommendList:fromJS(action.recommendList)
        })
    }
    if(action.type==='get_more_home_list'){
        return state.merge({
            listItem:state.get('listItem').concat(action.list),
            listItempage:action.pageNum
        })
    }
    if(action.type==='change_scroll_state'){
        return state.set('showScroll',action.state)
    }
    return state
}
