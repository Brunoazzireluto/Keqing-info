import { InfoColumnContainer,  } from "./styles"; 

const InfoColumn = ({title, child}) => {
    return (
        <InfoColumnContainer>
            {title}
                {child}
        </InfoColumnContainer>
    )
}

export default InfoColumn;