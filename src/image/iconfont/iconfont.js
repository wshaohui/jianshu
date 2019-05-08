import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}
.clearfix{
  &:before,&.after{
    content:" ";
    display:table; 
  }
  &:after{
    clear:both;
  }

}
.fl{
  float:left;
}
.fr{
  float:right;
}
ul{
  margin:0;
  padding:0;
  list-style: none;
}
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1541593612453'); /* IE9*/
  src: url('./iconfont.eot?t=1541593612453#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1541593612453') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1541593612453#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`


/* .icon-bi:before { content: "\e601"; }

.icon-fangdajing:before { content: "\e6e4"; }

.icon-Aa:before { content: "\e636"; } */

