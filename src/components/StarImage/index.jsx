import { StarImgContainer, DetailRowImage } from "./styles";
import Five from "../../images/Icon_5_Stars.png"


const StarImage = () => {
    return (
        <DetailRowImage>
            <StarImgContainer src={Five} alt="Five Starts" />
        </DetailRowImage>
            
    )
}

export default StarImage;
