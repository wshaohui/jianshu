
import React from 'react';
import {LoginWrapper,LoginBox} from './style';
import { connect } from 'react-redux';
import { loginCheck } from './store/actionCreators';
import { Link } from 'react-router-dom';
class Login extends React.Component{
    render(){
        return(
            <LoginWrapper>
                <LoginBox>
                    <input placeholder="账号" className="name"  ref={(input)=>{this.account = input}}/>
                    <input placeholder="密码" className="password" ref={(input)=>{this.password = input}}/>
                    {
                        this.props.login?<Link to='/'><div className="loginBtn" onClick={()=>this.props.login(this.account,this.password)}>登录</div></Link>:<div className="loginBtn" onClick={()=>this.props.login(this.account,this.password)}>登录</div>
                    }
                    
                </LoginBox>
            </LoginWrapper>
        )
    }
}
const mapStateToProps =(state)=>({
    login:state.getIn(['login','login'])
})
const mapDispatchToProps =(dispatch)=>({
    login(account,password){
        dispatch(loginCheck(account,password))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)