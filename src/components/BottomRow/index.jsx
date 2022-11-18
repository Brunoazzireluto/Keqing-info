import { InfoRowContainer } from "./styles"
import InfoColumn from "../InfoColumn"
import StarImage from "../StarImage"
import DetailRow from "../DetailRow"
import Sword from "../../images/Icon_Sword.webp"
import Electro from "../../images/Element_Electro.png"

const BottomRowHome = () => {
    return (
        <InfoRowContainer>
            <InfoColumn title='Rarity' child={<StarImage />} />
            <InfoColumn title='Weapon' child={<DetailRow src={Sword} alt="Sword Symbol" detail="Sword" />} />
            <InfoColumn title='Vision' child={<DetailRow src={Electro} alt="Sword Symbol" detail="Electro" />} />
        </InfoRowContainer>
    )
}

export default BottomRowHome;