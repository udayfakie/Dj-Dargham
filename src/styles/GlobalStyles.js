import { createGlobalStyle,keyframes } from "styled-components";


export const opacityAnimation = keyframes`
100%{
  opacity: 1;
}
0%{
  opacity: 0;
}
`
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: Sans-Serif;
    box-sizing: border-box;
}
  body{
    
    height: auto;
    background-image: url('https://daily.jstor.org/wp-content/uploads/2018/05/kingdom_of_kush_1050x700.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    
  }
`;

export default GlobalStyle;
