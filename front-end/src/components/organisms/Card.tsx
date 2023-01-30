import Text from '../atoms/Text'
import styled from 'styled-components';
import Label from '../molecules/Label';
import IconButton from '../molecules/IconButton';

interface CardInterface {
    name: string,
    time: string,
    difficulty: string,
    country: string,
    alcohol: string,
    picture: string
}

interface ImageContainerInterface {
    picture: string
}


export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  max-width: 175px;
  height: 200px;
  border-radius: 1rem;
  gap: 0.5rem;
  position: relative;
  color: ${({ theme }) => theme.secondary};
`;

export const ImageContainer = styled.button<ImageContainerInterface>`
  border: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 4px);
  border-radius: 1rem;
  background-image: ${({ picture }) => `url(${picture || ''})`};
  background-size: cover;
`;

export const InnerContainer = styled.button`
  border: none;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  opacity: 0;

  :hover{
    opacity: 1;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TitleContainer = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
`;

const Card = ({
    name,
    time,
    difficulty,
    country,
    alcohol,
    picture
}: CardInterface) => {

    return (
        <Container>
            <TitleContainer>
                <Text
                    size='16px'
                    weight='semibold'
                    color='white'
                >
                    {name}
                </Text>
            </TitleContainer>

            <ImageContainer picture={picture}>
                <InnerContainer data-testid='inner container'>
                    <InfoContainer>
                        <Label text={time} icon={'schedule'} fontSize='16px' fontColor='white' />
                        <Label text={difficulty} icon={'school'} fontSize='16px' fontColor='white' />
                        <Label text={country} icon={'flag'} fontSize='16px' fontColor='white' />
                        <Label text={alcohol} icon={'sports_bar'} fontSize='16px' fontColor='white' />
                    </InfoContainer>

                    <IconButton
                        unselectedColor='white'
                        icon={'favorite'}
                        onClick={() => { }}
                    />
                </InnerContainer>
            </ImageContainer>
        </Container >
    );
};

export default Card;