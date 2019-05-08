import React from 'react';
import { RecommendWraper,RecommendItem } from '../style';
import{ connect } from 'react-redux'
class Recommend extends React.Component{
    
    render(){
        const recommendList = this.props.list.map((item)=>(
            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
        ))
        return(
            <RecommendWraper>
                {recommendList}
            </RecommendWraper>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        list:state.getIn(['home','recommendList'])
    }
}
export default connect(mapStateToProps,null)(Recommend);