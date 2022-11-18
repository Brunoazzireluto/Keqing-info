import styled from "styled-components";

export const Container = styled.div `
    width: 60%;
    max-width: 50%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 0;
    border-bottom-right-radius: 22px;
    background-color: rgb(42,26,103, 0.85);
    
`
export const NavImg = styled.div`
    width: 15%;
    height: 60px;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;

`


export const NavItem = styled.a `
    text-decoration: none;
    text-align: center;
    color: #DFDDE8;
    font-family: 'Klee One', cursive;
    font-size: 1.7rem;
    cursor: pointer;
    
    &:hover{
        filter: drop-shadow(0 0 0.75rem white);
    }
`