import { Container, NavImg, NavItem } from "./styles";
import Logo from "../../images/Logo.png"

const Navbar = () => {
    return (
            <Container>
                <NavImg image={Logo}></NavImg>
                <NavItem>Infos</NavItem>
                <NavItem>Skills</NavItem>
                <NavItem>Lore</NavItem>
            </Container>

    )

}

export default Navbar;