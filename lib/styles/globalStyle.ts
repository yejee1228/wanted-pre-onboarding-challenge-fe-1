import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
  /* other styles */
  body{
    font-family: 'Noto Sans KR', sans-serif;
    font-size:15px;
    line-height:1.6;
  }
  * {
    box-sizing: border-box; margin:0; padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li { list-style:none }
  input{
    caret-color: #f96726; background-color: #ffffff
  }
  select{
    color: #ababab;
    appearance: none;
    background: url(/images/dropdown_arrow.svg) right no-repeat;
    background-origin: content-box;
  }
  input:focus, select:focus {
    outline-color: #f96726;
  }
  input::placeholder{
    color: #ababab; 
    font-family: NotoSans; 
    font-size: 13px; 
    font-weight: normal; 
    font-stretch: normal; 
    font-style: normal; 
    line-height: 1.38; 
    letter-spacing: -0.33px; 
    text-align: left;
  }
  button{
    
  }

`

export default GlobalStyle