import styled from "styled-components";

export const ColumnContainer = styled.div `
    padding: 20px;
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
`
export const ColumnTitle = styled.h3`
    font-size: 1.7rem ;
    font-family: 'Klee One', cursive;
    text-align: center;
    margin-bottom: 5px;
    filter: drop-shadow(0 0 0.5rem white);
`

export const ColumnText = styled.p`
    font-size: 1rem;    
`