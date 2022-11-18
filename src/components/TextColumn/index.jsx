import {ColumnContainer, ColumnTitle, ColumnText} from "./styles"

const TextColumn = ({title, text}) =>{
    return (
        <ColumnContainer>
            <ColumnTitle>{title}</ColumnTitle>
            <ColumnText>
                {text}
            </ColumnText>
        </ColumnContainer>
    )
}

export default TextColumn;


