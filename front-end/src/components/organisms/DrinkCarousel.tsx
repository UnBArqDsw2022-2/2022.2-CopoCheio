import Text from '../atoms/Text'
import styled from 'styled-components';
import Label from '../molecules/Label';
import IconButton from '../molecules/IconButton';
import Card from '../organisms/Card';

interface DrinkCarouselInterface {
    title: string,
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  & > span {
    padding-left: 16px;
  }

`;

const drinkList = [
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
    {
        name: 'Caipirinha',
        time: '10 min',
        difficulty: 'Fácil',
        country: 'Brasil',
        alcohol: 'Cachaça',
        picture: 'https://img.freepik.com/fotos-gratis/uisque_1205-588.jpg?1&w=740&t=st=1675093871~exp=1675094471~hmac=17d7043c92caa087f173fe462164711c8f4d8dda51fe51692bb55e7882a0e2b1'
    },
]

const CarouselWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 16px;

`


const DrinkCarousel = ({
    title
}: DrinkCarouselInterface) => {

    return (
        <Container>
            <Text font-size='18px' color='gold'>{title}</Text>
            <CarouselWrapper>
                {
                    drinkList.map(drink => (
                            <Card
                                name={drink.name}
                                time={drink.time}
                                difficulty={drink.difficulty}
                                country={drink.country}
                                alcohol={drink.alcohol}
                                picture={drink.picture}
                            />
                        )
                    )
                }
            </CarouselWrapper>
        </Container >
    );
};

export default DrinkCarousel;