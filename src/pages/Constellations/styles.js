import styled from "styled-components";

export const ContainerMain = styled.main`
    width: 100vw;
    height: 90vh;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div `
    width: 90%;
    height: 88%;
    background-color: rgb(42,26,103, 0.65);
    border-radius: 22px;
    filter: drop-shadow(0 0 0.5rem #7F00FF);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
`

export const RowContainer = styled.div`
    width: 95%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0;
    h3{
        text-transform: capitalize;
    }
`