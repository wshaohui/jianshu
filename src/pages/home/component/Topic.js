import React from 'react';
import{ connect } from 'react-redux'
import { TopicWraper } from '../style';
class Topic extends React.Component{
    render(){
        const TopicList = this.props.list.map((item)=>{
            console.log(item)
            return (
                <a className="collection" key={item.get('id')}>
                    <img src={item.get('imgUrl')} alt="64" />
                    <div className="name">{item.get('title')}</div>
                </a>
            )
        })
        return(
            <TopicWraper className="clearfix">
               {TopicList}
            </TopicWraper>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        list:state.getIn(['home','topicList'])
    }
}
export default connect(mapStateToProps,null)(Topic);