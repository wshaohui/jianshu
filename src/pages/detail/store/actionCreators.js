import axios from 'axios';
export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res)=>{
            const detailData = res.data.data;
            const action = {
                type:'get_init_data',
                title:detailData.title,
                content:detailData.content
            }
            dispatch(action)
        })
    }
}