import Text from '../atoms/Text'
import styled from 'styled-components';
import Label from '../molecules/Label';
import IconButton from '../molecules/IconButton';
import Card from '../organisms/Card';

interface DrinkCarouselInterface {
    title: string,
}


export const Container = styled.div`
  background-color: red;
`;

const DrinkCarousel = ({
    title
}: DrinkCarouselInterface) => {

    return (
        <Container>
            <Card
                name={'Caipirinha'}
                time={'10 min'}
                difficulty={'Fácil'}
                country={'Brasil'}
                alcohol={'Cachaça'}
                picture={'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'}
            />
        </Container >
    );
};

export default DrinkCarousel;