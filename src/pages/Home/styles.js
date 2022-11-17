import styled from "styled-components";

export const ImageContainer = styled.img `
    filter: drop-shadow(0 0 0.75rem purple);
    width:100% ;
    height:100% ;

`
export const Container = styled.main`
    width: 100vw;
    height: 90vh;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: transparent;
`


export const InfoContainer = styled.div`
    margin:30px ;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const TitleContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h1`
    font-size: 3rem ;
`
export const Subtitle = styled.h3 `
    font-size: 2rem;
    font-family: 'Klee One', cursive;
`
export const Text = styled.p`
    font-size: 1.5rem;    
`
export const InfoRow = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const InfoColumn = styled.div `
    padding: 20px;
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
    font-size: 1.5rem;
`

export const DetailRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
`
export const DetailRowImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
`

export const StarImg = styled.img`
    width: 80%;
    height: 100%;
`

export const DetailImg = styled.img`
    width: 50%;
    height: 50%;
`