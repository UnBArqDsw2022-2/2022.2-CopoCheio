import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import AttributesList from '../molecules/AttributesList';
import CardContainer from '../molecules/CardContainer';
import CardTitle from '../molecules/CardTitle';
import IconButton from '../molecules/IconButtons';
import ImageText from '../atoms/ImageText';
import Text from '../atoms/Text';
import DrinksModal from './DrinksModal/DrinksModal';


interface CardInterface {
    onExpand?: VoidFunction;
    onBlockUser?: VoidFunction;
    onDrinkRecommendation?: VoidFunction;
    onUnlockUser?: VoidFunction;
    cardTitle: string;
    backgroundImage: string;
    height: string;
    width: string;
    cardType: "drink" | "user";
    userName: string;
    userBlock?: boolean;
    userIndicationQuantity?: number;
    drinkTime?: number;
    drinkDifficulty?: string;
    drinkLocation?: string;
    drinkCategories?: string;
    userProfile?: string;
    drinkId: string;
    drinkPreparation: string;
    drinkIngredients: string;
    modalType?: 'genericDrinkModal' | 'recomendationDrinkModal';
}

const CardTextContainer = styled.span`
  display: flex;
  flex-direction:column;
  align-items:center;
  row-gap:4px;
  margin:auto;
  margin-bottom:52px;
`

const CardButtonsContainer = styled.span`
  display: flex;
  flex-direction:row;
  align-items:center;
  column-gap:24px;
  margin:auto;
  margin-top:0px;
  margin-bottom:28px;
`

const CardListContainer = styled.span`
  display: flex;
  margin:auto;
  margin-left:0px;
  margin-bottom:16px;
`

const UserProfileContainer = styled.span`
  display: flex;
  margin:auto;
  margin-left:0px;
  margin-bottom:18px;
`

const Card = ({
    drinkId,
    onExpand,
    cardTitle,
    backgroundImage,
    height,
    width,
    cardType,
    userBlock,
    userName,
    userIndicationQuantity,
    onBlockUser,
    onDrinkRecommendation,
    onUnlockUser,
    drinkTime,
    drinkDifficulty,
    drinkLocation,
    drinkCategories,
    userProfile,
    drinkPreparation,
    drinkIngredients,
    modalType
}: CardInterface) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [hover, setHover] = useState(false);



    const infoObject = {
        id: drinkId,
        title: cardTitle,
        userName: userName,
        image: backgroundImage,
        time: drinkTime,
        dificulty: drinkDifficulty,
        base: ['Vodka'],
        country: drinkLocation ? drinkLocation[0] : 'Sem pais de origem',
        guide: drinkPreparation,
        ingredients: drinkIngredients[0]
    }

    return (
        <>
            <CardContainer
                height={height}
                width={width}
                backgroundImage={backgroundImage}
                borderColor={(cardType === 'user' && userBlock) ? (
                    colors.denied
                ) : (
                    colors.primary
                )}
                hover={hover}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setModalIsOpen(true)}
            >
                {(onExpand && hover) ? (
                    <CardTitle onClick={onExpand}>{cardTitle}</CardTitle>
                ) : (
                    <CardTitle>{cardTitle}</CardTitle>
                )}


                {(cardType === 'user' && hover) && (
                    <>
                        <CardTextContainer>
                            <Text
                                weight='regular'
                                size='12px'
                                color={colors.alternative_white}
                                style={{
                                    textAlign: 'center'
                                }}
                            >
                                {(userBlock)
                                    ? (<>Esse usuário se encontra <br /><Text weight='semibold' size='12px' color={colors.denied}> restringido</Text></>)
                                    : (<>Esse usuário recomendou<Text weight='semibold' size='12px' color={colors.primary}> {userIndicationQuantity} receitas </Text>de bebida no total.</>)}
                            </Text>
                        </CardTextContainer>
                        <CardButtonsContainer>
                            {(userBlock)
                                ? (<>
                                    <IconButton
                                        type='default'
                                        onClick={(onUnlockUser) && (() => { onUnlockUser() })}
                                        icon={'lock_open'}
                                        iconColor={colors.success}
                                        fontSize="32px"
                                    />
                                    <IconButton
                                        type='default'
                                        onClick={(onDrinkRecommendation) && (() => { onDrinkRecommendation() })}
                                        icon={'sports_bar'}
                                        iconColor={colors.grey}
                                        fontSize="32px"
                                    />
                                </>)
                                : (<>
                                    <IconButton
                                        type='default'
                                        onClick={(onBlockUser) && (() => { onBlockUser() })}
                                        icon={'block'}
                                        iconColor={colors.denied}
                                        fontSize="32px"
                                    />
                                    <IconButton
                                        type='default'
                                        onClick={(onDrinkRecommendation) && (() => { onDrinkRecommendation() })}
                                        icon={'sports_bar'}
                                        iconColor={colors.primary}
                                        fontSize="32px"
                                    />
                                </>)}
                        </CardButtonsContainer>
                    </>
                )}

                {(cardType === 'drink' && hover) && (
                    <CardListContainer>
                        <AttributesList
                            time={drinkTime}
                            difficulty={drinkDifficulty}
                            location={drinkLocation ? drinkLocation[0] : 'Sem pais de origem'}
                            categories={drinkCategories}
                        />
                    </CardListContainer>
                )}

                {(cardType === 'drink' && !hover) && (
                    <UserProfileContainer>
                        <ImageText imageSize="20px" fontSize='10px' fontColor={colors.alternative_white} imageLeft={userProfile}>{userName}</ImageText>
                    </UserProfileContainer>
                )}
            </CardContainer>
            {
                cardType === 'drink' &&
                <DrinksModal
                    isShown={modalIsOpen}
                    modalType={modalType}
                    drinkInfoObject={infoObject}
                    toggle={() => setModalIsOpen(false)}
                />
            }
        </>
    )
}

export default Card;