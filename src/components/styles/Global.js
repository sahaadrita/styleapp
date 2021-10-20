import { createGlobalStyle } from "styled-components";
const GlobalStyles=createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: green;
    
}

`
export default GlobalStyles