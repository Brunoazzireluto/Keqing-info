import Keging from "../../images/keqingUlt.webp"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImageBackground from "../../components/ImageBackground";
import BottomRowHome from "../../components/BottomRow";
import { motion } from "framer-motion"

import {
    Container,
    InfoContainer,
    Subtitle,
    Title,
    TitleContainer,
    Text} from "./styles";

const Home = () => {

    const pageVariants = {
        initial: {
          opacity: 0
        },
        in: {
          opacity: 1
        },
        out: {
          opacity: 0
        }
      };
    
      const pageTransition = {
        type: 'tween',
        ease: 'linear',
        duration: 0.55
      }; 

    return (
        <>
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
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
                    <BottomRowHome />
                </InfoContainer>
                <ImageBackground src={Keging} alt="Keqing ult" />
                <Footer />
            </Container>
        </motion.div>
        </>
    )
}

export default Home;