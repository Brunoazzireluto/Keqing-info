import { Container, NavImg, NavItem } from "./styles";
import { useNavigate } from 'react-router-dom';
import Logo from "../../images/Logo.png"

const Navbar = () => {
    const navigate = useNavigate();


    const handleClickhome = () => {
        navigate('/')
    }

    const handleClickConstellations = () => {
        navigate('/constellations')
    }

    const handleClickSkills= () => {
        navigate('/skills')
    }

    const handleClickLore = () => {
        navigate('/lore')
    }

    const RedirectPage = () => {
        window.open('https://genshin.hoyoverse.com/pt/home', '_blank');
    }

    return (
            <Container>
                <NavImg image={Logo} onClick={RedirectPage}></NavImg>
                <NavItem onClick={handleClickhome} >Home</NavItem>
                <NavItem onClick={handleClickConstellations} >Constellations</NavItem>
                <NavItem onClick={handleClickSkills} >Skills</NavItem>
                <NavItem onClick={handleClickLore} >Lore</NavItem>
            </Container>

    )

}

export default Navbar;