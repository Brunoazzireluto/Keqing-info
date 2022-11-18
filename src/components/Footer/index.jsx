import { FooterContainer, FooterText, FooterLink } from "./styles"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>All information belongs to <FooterLink href="https://www.mihoyo.com" target="_blank">Mihoyo Co., Ltd</FooterLink></FooterText>
            <FooterText>
            information taken from websites  
            <FooterLink href="https://genshin-impact.fandom.com" target="_blank">  Genshin Impact Wiki  </FooterLink>
            and <FooterLink href="https://wiki.hoyolab.com/pc/genshin/aggregate/character" target="_blank" > HoyoWiki </FooterLink>
            </FooterText>
            <FooterText>
            based on the design of 
            <FooterLink href="https://dribbble.com/shots/18722056-Genshin-Impact-website-concept" target="_blank" > Anna Lebedeva</FooterLink> at dribbble
            </FooterText>
      </FooterContainer>
    )
}

export default Footer;