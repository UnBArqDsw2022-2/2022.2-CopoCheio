import styled from "styled-components";

interface ImageLogoInterface {
    path?: string;
    alt?: string;
}

const GenericImageLogo = styled.image<ImageLogoInterface>`
`
const ImageLogo = ({
    path,
    alt,
}: ImageLogoInterface) => {
    return (
        <GenericImageLogo
        >
            <img src={path} alt={alt} />
        </GenericImageLogo>
    )
}
export default ImageLogo;
