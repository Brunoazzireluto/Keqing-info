import RoundSymbol from "../RoundSymbol"
import { RowContainer } from "./styles"

const TableLine = ({src, alt, child}) => {
    return (
        <RowContainer>
            <RoundSymbol src={src} alt={alt} />
            {child}
        </RowContainer>
    )
}

export default TableLine;