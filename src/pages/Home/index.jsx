import Keging from "../../images/keqingUlt.webp"
import Five from "../../images/Icon_5_Stars.png"
import Sword from "../../images/Icon_Sword.webp"
import Electro from "../../images/Element_Electro.png"
import Navbar from "../../components/Navbar";

import { 
    Container, 
    ImageContainer, 
    InfoContainer, 
    InfoRow,
    Subtitle, 
    Title, 
    TitleContainer, 
    Text,
    InfoColumn,
    DetailRow,
    StarImg, 
    DetailImg,
    DetailRowImage
     } from "./styles";



const Home = () => {
    return (
        <>
        <Navbar />

        <Container>
            <InfoContainer>
                <TitleContainer>
                    <Title>Keqing</Title>
                    <Subtitle>Driving Thunder</Subtitle>
                </TitleContainer>
                <Text>
                    The Yuheng of the Liyue Qixing, Keqing. She is a workaholic and is subject to pressure even at her young age. 
                    One might attribute her to perfectionism when pertaining to work, 
                    causing many of their employees to resign but in reality, 
                    she has a strong sense of responsibility and tenaciousness inherited from her grandfather.
                </Text>
                <InfoRow>
                    <InfoColumn>
                        Rarity
                        <DetailRowImage>
                            <StarImg src={Five} alt="Five Start" />
                        </DetailRowImage>
                    </InfoColumn>
                    <InfoColumn>
                        Weapon
                        <DetailRow>
                            <DetailImg src={Sword} alt="Sword Symbol" />
                            Sword
                        </DetailRow>
                    </InfoColumn>
                    <InfoColumn>
                        Vision
                        <DetailRow>
                            <DetailImg src={Electro} alt="Sword Symbol" />
                            Electro
                        </DetailRow>
                    </InfoColumn>
                </InfoRow>
            </InfoContainer>
            <ImageContainer src={Keging} alt="Keqing ult" />
        </Container>
        



        </>
    )
}

export default Home;