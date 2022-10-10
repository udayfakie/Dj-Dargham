import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: Sans-Serif;
    box-sizing: border-box;
}
  body{
    ${"" /* background-color: lightblue; */}
    ${'' /* height: 100vh; */}
    background-image: url('https://daily.jstor.org/wp-content/uploads/2018/05/kingdom_of_kush_1050x700.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default GlobalStyle;
