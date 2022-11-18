import { InfoRowContainer, DetailRowContainer } from "./styles"
import InfoColumn from "../InfoColumn"


const BottomRowLine = () => {
    return (
        <InfoRowContainer>
            <InfoColumn title='Region' child={<DetailRowContainer>Liyue</DetailRowContainer>} />
            <InfoColumn title='Affiliation' child={<DetailRowContainer>Liyue Qixing</DetailRowContainer>} />
            <InfoColumn title='Birthday' child={<DetailRowContainer>November 20th</DetailRowContainer>} />
        </InfoRowContainer>
    )
}

export default BottomRowLine;