import Navbar from "../../components/Navbar"
import TextColumn from "../../components/TextColumn";
import Separator from "../../components/Separator"
import TableLine from "../../components/TableLine";
import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";
import { Container, ContainerMain, RowContainer } from "./styles";
import Constelation1 from "../../images/Constellation_1.webp"
import Constelation2 from "../../images/Constellation_2.webp"
import Constelation3 from "../../images/Constellation_3.webp"
import Constelation4 from "../../images/Constellation_4.webp"
import Constelation5 from "../../images/Constellation_5.webp"
import Constelation6 from "../../images/Constellation_6.webp"

import { motion } from "framer-motion"


const Constellations = () => {

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
                <PageTitle title="Constellations" />
                <ContainerMain>
                    <Container>
                        <RowContainer>
                            <h3>symbol</h3>
                            <h3>Constellation</h3>
                            <h3>Type</h3>
                        </RowContainer>
                        <Separator />
                        <TableLine 
                            src={Constelation1} 
                            alt="Constelation one"
                            child={                                
                                <TextColumn 
                                    title='Thundering Might' 
                                    text="
                                    Recasting Stellar Restoration while a Lightning Stiletto is present causes Keqing 
                                    to deal 50% of her ATK as AoE Electro DMG at the start point and terminus of her Blink." 
                                />}
                        />
                        <Separator />
                        <TableLine 
                            src={Constelation2}
                            alt='Constelation two'
                            child={
                                <TextColumn 
                                    title='Keen Extraction' 
                                    text="
                                        When Keqing's Normal and Charged Attacks hit opponents affected by Electro, 
                                        they have a 50% chance of producing an Elemental Particle.
                                        This effect can only occur once every 5s."         
                                />}
                        />
                        <Separator />
                        <TableLine 
                            src={Constelation3}
                            alt='Constelation three'
                            child={                           
                                <TextColumn 
                                    title='Foreseen Reformation' 
                                    text='
                                        Increases the Level of Starward Sword by 3.
                                        Maximum upgrade level is 15.' 
                                />}
                        />
                        <Separator />
                        <TableLine 
                            src={Constelation4}
                            alt='Constelation four'
                            child={                                
                                <TextColumn 
                                    title='Attunement' 
                                    text='
                                        For 10s after Keqing triggers an Electro-related Elemental 
                                        Reaction, her ATK is increased by 25%.'
                                />}
                        />
                        <Separator />
                        <TableLine 
                            src={Constelation5}
                            alt='Constelation five'
                            child={                                
                                <TextColumn 
                                    title='Beckoning Stars' 
                                    text='
                                        Increases the Level of Stellar Restoration by 3.
                                        Maximum upgrade level is 15.'                                            
                                />}
                        />
                        <Separator />
                        <TableLine 
                            src={Constelation6}
                            alt='Constelation six'
                            child={                                
                                <TextColumn 
                                    title='Tenacious Star' 
                                    text='
                                    When initiating a Normal Attack, a Charged Attack, Elemental Skill or Elemental Burst, 
                                    Keqing gains a 6% Electro DMG Bonus for 8s.
                                    Effects triggered by Normal Attacks, Charged Attacks, 
                                    Elemental Skills and Elemental Bursts are considered independent entities.' 
                                />}
                        />
                        </Container>
                        <Footer />
                    </ContainerMain>
        </motion.div>
        </>
        
    )
}

export default Constellations;


