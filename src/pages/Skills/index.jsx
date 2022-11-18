import Navbar from "../../components/Navbar"
import TextColumn from "../../components/TextColumn";
import Separator from "../../components/Separator"
import TableLineSkills from "../../components/TableLineSkills";
import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";
import { Container, ContainerMain, RowContainer } from "./styles";
import Talent1 from "../../images/Talent1.webp"
import Talent2 from "../../images/Talent2.webp"
import Talent3 from "../../images/Talent3.webp"
import Talent4 from "../../images/Talent4.webp"
import Talent5 from "../../images/Talent5.webp"
import Talent6 from "../../images/Talent6.webp"

import { motion } from "framer-motion"


const Skills = () => {
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
            <PageTitle title="Skills" />
            <ContainerMain>
                    <Container>
                    <RowContainer>
                        <h3>symbol</h3>
                        <h3>Skill</h3>
                        <h3>Type</h3>
                    </RowContainer>
                    <Separator />
                    <TableLineSkills 
                        src={Talent1}
                        alt="Talent one"
                        child={
                        <TextColumn
                            title='Yunlai Swordsmanship'
                            text='Performs up to 5 rapid strikes.'
                        />}
                        type="Normal Attack"
                    />
                    <Separator />
                    <TableLineSkills 
                        src={Talent2}
                        alt="Talent two"
                        child={
                        <TextColumn
                            title='Stellar Restoration'
                            text='Hurls a Lightning Stiletto that annihilates her opponents like the swift thunder.
                                When the Stiletto hits its target, it deals Electro DMG to opponents in a small AoE, 
                                and places a Stiletto Mark on the spot hit.'
                        />}
                        type="Elemental Skill"
                    />
                    <Separator />
                    <TableLineSkills 
                        src={Talent3}
                        alt="Talent three"
                        child={
                        <TextColumn
                            title='Starward Sword'
                            text='Keqing unleashes the power of lightning, dealing Electro DMG in an AOE.
                                She then blends into the shadow of her blade, striking a series of thunderclap-blows to nearby opponents 
                                simultaneously that deal multiple instances of Electro DMG. The final attack deals massive AoE Electro DMG.'
                        />}
                        type="Elemental Burst"
                    />
                    <Separator />
                    <TableLineSkills 
                        src={Talent4}
                        alt="Talent four"
                        child={
                        <TextColumn
                            title='Thundering Penance'
                            text="After recasting Stellar Restoration while a Lightning Stiletto is present, 
                                Keqing's weapon gains an Electro Infusion for 5s."
                        />}
                        type="Ascension Passive"
                    />
                    <Separator />
                    <TableLineSkills 
                        src={Talent5}
                        alt="Talent five"
                        child={
                        <TextColumn
                            title='Aristocratic Dignity'
                            text="When casting Starward Sword, Keqing's 
                                CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s."
                        />}
                        type="Ascension Passive"
                    />
                    <Separator />
                    <TableLineSkills 
                        src={Talent6}
                        alt="Talent six"
                        child={
                        <TextColumn
                            title="Land's Overseer"
                            text='When dispatched on an expedition in Liyue, time consumed is reduced by 25%.'
                        />}
                        type="Utility Passive"
                    />
                    </Container>
                    <Footer />
            </ContainerMain>
        </motion.div>
        </>
    )
}

export default Skills;