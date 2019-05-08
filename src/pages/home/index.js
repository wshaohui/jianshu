import React from 'react';
import { HomeWraper,HomeLeft,HomeRight,BackTop } from './style';
import Topic from './component/Topic';
import Writer from './component/Writer';
import List from './component/List';
import Recommend from './component/Recommend';
import { connect } from 'react-redux';
import { getInitHomeData,toggleShow } from './store/actionCreators';
class Home extends React.Component{
    componentDidMount(){
       this.props.initHomeData();
       this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopState)
    }
    bindEvents = ()=>{
        window.addEventListener('scroll',this.props.changeScrollTopState)
    }
    handleScollTop =()=>{
        window.scrollTo(0,0);
    }
    render(){
        return(
            <HomeWraper className="clearfix">
                <HomeLeft>
                    <img className="baner-img" 
                    src="//upload.jianshu.io/admin_banners/web_images/4570/5d4776585f0206ff2e807971a13b06ed7d494595.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                    alt=""
                    />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll?<BackTop onClick={this.handleScollTop}></BackTop>:null}
            </HomeWraper>
        )
    }
}
const mapStateToProps = (state) =>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatchToProps = (dispatch) =>({
    initHomeData(){
        dispatch(getInitHomeData())
    },
    changeScrollTopState(){
        const scrollTop = document.documentElement.scrollTop;
        if(scrollTop > 200){
            dispatch(toggleShow(true))
        }else{
            dispatch(toggleShow(false))
        }
    }

})
export default connect(mapStateToProps,mapDispatchToProps)(Home);