import React, { Component } from 'react';
import {HeaderWraper,Logo,Nav,NavItem,NavSearch,AddButton,Button,NavSearchWraper,SearchInfo} from "./style";
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { searchBlur,searchFocus,getList,mouseEnter,mouseLeave,changePage }  from './store/actionCreators.js'
import { LoginOut } from '../../pages/login/store/actionCreators';
import { Link } from 'react-router-dom'
 class Header extends Component {
    
    getFocusState = () =>{
        const { focused,list,page,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage,totalPage } =this.props;
        const changeList = list.slice((page-1)*10,page*10);
        if(focused || mouseIn){
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <div className="search-trending">
                        <div className="search-info-title clearfix">
                            <div className="fl">
                            热门搜索
                            </div>
                            <div className="fr">
                                <i ref={(spin)=>this.spin=spin} className="iconfont spin">&#xe851;</i>
                                <a onClick={()=>handleChangePage(page,totalPage,this.spin)}>换一换</a>
                            </div>
                        </div>
                        <ul className="search-info-panel clearfix">
                            {
                                changeList.map((item)=>{
                                    return <li key={item}><a>{item}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
  render() {
      const {focused,handleInputFocus,handleInputBlur,login,loginout} = this.props;
    return (
        <HeaderWraper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left"><i className="iconfont">&#xe791;</i>下载APP</NavItem>
                { login?<NavItem onClick={loginout} className="right">退出</NavItem>:<Link to='/login'><NavItem className="right">登录</NavItem></Link>}
                <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                <NavSearchWraper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={focused?'fouced':''}
                            onFocus={()=>handleInputFocus(this.props.list)}
                            onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className="iconfont search-icon">&#xe6e4;</i>
                    {this.getFocusState()}
                </NavSearchWraper>
                <AddButton>
                    {login?<Link to="/writing"><Button><i className="iconfont">&#xe601;</i>学文章</Button></Link>:<Link to='/login'><Button><i className="iconfont">&#xe601;</i>学文章</Button></Link>}
                    
                    <Button>注册</Button>
                </AddButton>
            </Nav>
        </HeaderWraper>
    );
  }
}
const mapStateToProps=(state)=>{
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login']),
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(list){
            if(list.size>0){

            }else{
                dispatch(getList())
            }
            dispatch(searchFocus())
        },
        handleInputBlur(){
            dispatch(searchBlur())
        },
        handleMouseEnter(){
            dispatch(mouseEnter())
        },
        handleMouseLeave(){
            dispatch(mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            var originAngle = parseInt(spin.style.transform.replace(/[^0-9]/ig,''));
                if(originAngle){
                    originAngle+=360;
                }else{
                    originAngle = 360;
                }
                spin.style.transform = 'rotate('+originAngle+'deg)'
            if(page<totalPage){
                dispatch(changePage(page+1))
            }else{
                dispatch(changePage(1))
            }
        },
        loginout(){
            dispatch(LoginOut())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
