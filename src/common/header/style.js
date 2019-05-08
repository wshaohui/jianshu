import styled from 'styled-components';
import logoPic from '../../image/logo.png';
export const HeaderWraper =styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
  z-index:1;
`
export const Logo =styled.a.attrs({
    href:'/'
})`
  position:absolute;
  top:0;
  left:0;
  height:56px;
  width:100px;
  display:inline-block;
  background: url(${logoPic});
  background-size:contain;

`
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`
export const NavItem =styled.div`
    padding:0 15px;
    line-height:56px;
    color: #333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`
export const NavSearch =styled.input.attrs({
    placeholder:'搜索'
})`
    padding:0 30px 0 20px;
    color:#666;
    width:200px;
    height:100%;
    border-radius:40px;
    background: #eee;
    border:none;
    outline:none;
    &::placeholder{
        color:#990;
    }
    &.fouced{
        width:300px;
        &~.search-icon{
            background:#969696;
            color:white;
        }
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
    }
    
   
`
export const AddButton = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:100%;
`
export const NavSearchWraper =styled.div`
    float:left;
    margin-top:9px;
    height:38px;
    margin-left:15px;
    position:relative;
    
    .search-icon{
        position:absolute;
       right:5px;
       bottom:5px;
       width:30px;
       border-radius:15px;
       text-align:center;
       cursor:pointer;
       line-height:30px;
    //    background-color:green
        

    }
`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
`
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:250px;
    marginn-top:9px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    color: #969696;
    background-color: #fff;
    &:before{
        content: "";
        left: 27px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: -5px;
        z-index: -1;
        position: absolute;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
    }
    &:after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
    .search-trending{
        padding:20px 20px 10px;
    }
    .search-info-title{
        height:20px;
        line-height:20px;
        margin-bottom:10px;
        a{
            font-size: 13px;
        }
        .spin{
            font-size:12px;
            margin-right:4px;
            transition:all .2s ease-in;
            display:inline-block;
            transform-origin: center center;
            vertical-align: middle;
        }
    }
    .search-info-panel{
        li{
            float:left;
            padding: 2px 6px;
            font-size: 12px;
            color: #787878;
            border: 1px solid #ddd;
            border-radius: 3px;
            margin-right:10px;
            margin-bottom:10px;
            cursor:pointer;
            &:hover{
                color:#333;
            }
        }
    }
`