import { DetailImgContainer, DetailRowContainer } from "./styles";

const DetailRow = ({src, alt, detail}) => {
    return (
        <DetailRowContainer>
            <DetailImgContainer src={src} alt={alt} />
            {detail}
        </DetailRowContainer>
    )
}

export default DetailRow;
