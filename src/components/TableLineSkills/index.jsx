import RoundSymbol from "../RoundSymbol"
import { RowContainer,TypeText } from "./styles"

const TableLineSkills = ({src, alt, child, type}) => {
    return (
        <RowContainer>
            <RoundSymbol src={src} alt={alt} />
            {child}
            <TypeText>{type}</TypeText>
        </RowContainer>
    )
}

export default TableLineSkills;