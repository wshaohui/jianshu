import axios from 'axios';
import { fromJS } from 'immutable';
export const getInitHomeData =()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const homeData = res.data.data;
            const action = {
                type:'init_home_data',
                topicList:homeData.topicList,
                listItem:homeData.listItem,
                recommendList:homeData.recommendList,
            }
            dispatch(action)
        })
    }
}
const addHomeList = (list,page)=>({
    type:'get_more_home_list',
    list:fromJS(list),
    pageNum:page
})
export const getMoreList = (page) =>{
    return (dispatch)=>{
      axios.get('/api/homeList.json?page=' + page).then((res)=>{
          const moreList = res.data.data;
        dispatch(addHomeList(moreList,page+1))
      })
    }
}
export const toggleShow = (state) =>({
    type:'change_scroll_state',
    state
})