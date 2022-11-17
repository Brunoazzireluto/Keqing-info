import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    *{
        margin:0;
        padding:0;
    }

    body{
        height:100vh;
        background-color: #2A1A67;
        color: #DFDDE8;
        background: linear-gradient(to left, rgba(0,0,0,0) 10%, rgba(0,0,0,1)), url(${(props) => props.image});
        background-repeat: no-repeat;
        background-size: cover;
        font-family: 'Signika', sans-serif;
    }
`