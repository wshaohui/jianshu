import styled from 'styled-components';

export const HomeWraper = styled.div`
    width:960px;
    margin:0 auto;
    height:300px;
    padding-top:30px;
`
export const HomeLeft = styled.div`
    float:left;
    width:625px;
    .baner-img{
        width:100%;
        height:270px;
        margin-bottom: 35px;
    }

`
export const HomeRight = styled.div`
    float:right;
    width:280px;
`
export const TopicWraper = styled.div`
    margin-bottom: 20px;
    .collection{
        display: inline-block;
        margin: 0 18px 18px 0;
        min-height: 32px;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        vertical-align: top;
        overflow: hidden;
        cursor:pointer;
        img{
            width: 32px;
            height: 32px;
            vertical-align: middle;
        }
        .name{
            display: inline-block;
            padding: 0 11px 0 6px;
            font-size: 14px;
        }
    }
    
`
export const ListItem = styled.ul`
    a{
        text-decoration: none;
    }
    li{
        position: relative;
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
        line-height: 20px;
        &.have-img{
            min-height:140px;
        }
        .wrap-img{
            position: absolute;
            top: 50%;
            margin-top: -60px;
            right: 0;
            width: 125px;
            height: 100px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 4px;
                border: 1px solid #f0f0f0;
            }
        }
        .content{
            padding-right: 140px;
            .title{
                margin: -7px 0 4px;
                display: inherit;
                font-size: 18px;
                font-weight: 700;
                line-height: 1.5;
                text-decoration: none;
                color: #333;
                &:visited {
                    color: #969696;
                }
                &:hover{
                    text-decoration: underline;
                }
            }
            .abstract{
                margin: 0 0 8px;
                font-size: 13px;
                line-height: 24px;
                color: #999;
            }
        }
    }
    .learnmore{
        width: 100%;
        height: 40px;
        margin: 30px auto 60px;
        padding: 10px 15px;
        text-align: center;
        font-size: 15px;
        border-radius: 20px;
        color: #fff;
        background-color: #a5a5a5;
        display: block;
        cursor: pointer;
    }
`
export const RecommendWraper = styled.div`
    width:100%;
    
`
export const RecommendItem = styled.div`
    width:100%;
    height:50px;
    background:url(${props=>{ return props.imgUrl}});
    background-size:100% 100%;
`
export const WriteWrap = styled.ul`
    width:100%;
    height:300px;
    text-align:center;
    line-height:300px;
`
export const BackTop = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    border: 1px solid #dcdcdc;
    width: 50px;
    height: 50px;
    z-index: 1040;
    cursor:pointer;
`