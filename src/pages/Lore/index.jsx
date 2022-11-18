import Keging from "../../images/keqing.webp"
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle"
import ImageBackground from "../../components/ImageBackground";
import Footer from "../../components/Footer";
import BottomRowLine from "../../components/BottomRowLine";
import { motion } from "framer-motion"

import {
    Container,
    InfoContainer,
    Text,} from "./styles";

const Lore = () => {

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
            <PageTitle title="Lore" />
            <Container>
                <InfoContainer>
                    <Text>
                      The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' 
                      unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot.
                      One of the Liyue Qixing, Keqing has an uncompromising belief in actions over words. 
                      If she sees something that needs doing, she'll do it herself. For example, 
                      she traveled around Liyue and carefully memorized each detail of the land so that she may one day be able to maximize 
                      the utility of every last inch of Liyue.
                    </Text>
                    <Text>
                      Keqing deals with the day-to-day affairs of Liyue, whether great or small, while Rex Lapis only descends once a year.
                      To many, the millennia of prosperity that Liyue has enjoyed serve to legitimize Rex Lapis' guidance of the city. 
                      But Keqing has her reservations about all this, viewing Liyue's present prosperity as 
                      akin to a magnificent sandcastle on the beach — humanity does not have the 
                      luxury of deciding when the tide will come in.
                    </Text>
                    <Text>
                      Rex Lapis has watched over Liyue for a millennium. But what about the next millennium? What about the next ten, 
                      or the next hundred millennia? How long are we expecting this status quo to last?
                      It is this unanswered question that drives Keqing to work relentlessly and remain diligent.
                      From most people's perspective, there is no point in working oneself up like this. 
                      But Keqing cannot sit by idly and ignore this hidden danger.
                    </Text>
                    <Text>
                      The people of Liyue have never considered navigating the future on their own terms. 
                      But someone must walk on the front line of the epoch and forge a new path with their own hands.
                      From most people's perspective, there is no point in working oneself up like this. 
                      But Keqing cannot sit by idly and ignore this hidden danger.
                    </Text>
                    <BottomRowLine />
                </InfoContainer>
                <ImageBackground src={Keging} alt="Keqing ult" />
              <Footer />
            </Container>
        </motion.div>
        </>
    )
}

export default Lore;