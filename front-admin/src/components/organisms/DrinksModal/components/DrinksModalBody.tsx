import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import ModalText from "../../../molecules/ModalText";
import TitleWithIcon from "../../../molecules/TitleWithIcon";
import { colors } from "../../../../styles/colors";
import Image from "../../../atoms/Image";
import IconText from "../../../atoms/IconText";
import Icon from "../../../atoms/Icon/Icon";
import TextInput from "../../../atoms/TextInput";
import GenericTextArea from "../../../atoms/GenericTextArea";
import DropDown from "./DropDown";
import Text from "../../../atoms/Text";

interface DrinksModalBodyInterface {
    drinkInfoObject: {
        id: string;
        title: string,
        userName: string,
        userImage?: string,
        image?: string,
        time?: number,
        dificulty?: string | null,
        base: string[],
        country?: string,
        guide: string
        ingredients: string
    };
    setDrinkInfoObject: Dispatch<SetStateAction<{ id: string; title: string; userName: string; time?: number; base: string[]; dificulty?: string | null; country?: string; ingredients: string; guide: string; }>>;
}

const BodyContainer = styled.div`
    display: flex;
    padding: 10px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
    flex-wrap: wrap;
`;

const TextSide = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  padding: 1%;
  overflow: hidden;
  flex-direction: column;
`;

const CardSide = styled.div`
  height: 100%;
  width: 40%;
  padding: 1%;
  overflow: hidden;
`;

const BlankImage = styled.div`
  display: flex;
  height: 45%;
  background-color: ${colors.grey};
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: ${colors.white};
  flex-flow: column;
`;

const IconRow = styled.div`
    display: flex;
    height: fit-content;
    width: 100%;
    margin-top: 3%;
`;

const LeftIcon = styled.div`
    position: relative;
    height: fit-content;
`;
const RightIcon = styled.div`
    height: fit-content;
    margin-left: 32px;
`;

const TimeInputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.grey};
`;

const TimeInput = styled.input`
    outline: none;
    border: none;
    width: 20px;
    padding: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.grey};
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 130px;
  overflow-y: auto;
`;

const AlcoholDropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 200px;
`;

const AlcoholTextIconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const AlcoholListContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 120px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const AddAlcoholButton = styled.button`
    display: flex;
    margin-top: 8px;
    align-items: center;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.black};
    background: none;
`;

const DrinksModalBody = ({
    drinkInfoObject,
    setDrinkInfoObject
}: DrinksModalBodyInterface) => {
    const [onClickInput, setOnClickInput] = useState('');
    const resetSetOnClickInput = (e: any) => { e.key === 'Enter' && setOnClickInput('') };

    const handleSetOnClickInput = (value: string) => {
        if (value !== onClickInput)
            setOnClickInput(value);
        else
            setOnClickInput('');
    }

    const handleDificulty = (value: string) => {
        setDrinkInfoObject({
            ...drinkInfoObject,
            dificulty: value
        });
        setOnClickInput('');
    };

    const handleCountry = (value: string) => {
        setDrinkInfoObject({
            ...drinkInfoObject,
            country: value
        });
        setOnClickInput('');
    }

    const handleAlcohols = (value: string) => {
        const alcoholArray = drinkInfoObject.base;
        const arrayIndex = alcoholArray.indexOf(value);
        if (value === alcoholArray[arrayIndex] && alcoholArray.length > 1)
            alcoholArray.splice(arrayIndex, 1);
        else if (value !== alcoholArray[arrayIndex] && alcoholArray.length < 3)
            alcoholArray.push(value)

        setDrinkInfoObject({
            ...drinkInfoObject,
            base: alcoholArray
        });
    }

    const verifyAlcoholIsChecked = (value: string) => {
        const alcoholArray = drinkInfoObject.base;
        const arrayIndex = alcoholArray.indexOf(value);
        if (value === alcoholArray[arrayIndex])
            return true
        return false
    }

    const mockCountry = [
        'Russia',
        'Brazil',
        'USA',
        'Argentina',
        'Japan',
        'China',
        'South Korea'
    ];

    const mockAlcohols = [
        'Vodka',
        'Gin',
        'Tequila',
        'Cachaça',
        'Sake'
    ];

    const dificulty: { EASY: string; MEDIUM: string; HARD: string; } = {
        EASY: 'Fácil',
        MEDIUM: 'Médio',
        HARD: 'Difícil'
    };

    return (
        <BodyContainer>
            <TextSide>
                {onClickInput === 'title' ? <div onKeyDown={resetSetOnClickInput}><GenericTextArea value={drinkInfoObject.title} type='input' placeHolder={drinkInfoObject.title} onChange={e => setDrinkInfoObject({ ...drinkInfoObject, title: e.target.value })} fontSize='16px' weight='bold' /></div> : <div onClick={() => handleSetOnClickInput('title')}><TitleWithIcon title={drinkInfoObject.title} label={drinkInfoObject.userName} image={drinkInfoObject.userImage} /></div>}
                {
                    onClickInput === 'ingredients' ?
                        <div style={{marginTop: '16px'}} onKeyDown={resetSetOnClickInput}>
                            <TextInput value={drinkInfoObject.ingredients} onChange={e => setDrinkInfoObject({ ...drinkInfoObject, ingredients: e.target.value })} width='100%' height='110px' title='Ingredientes' size='16px' textSize='12px' />
                        </div> :
                        <div onClick={() => handleSetOnClickInput('ingredients')}><ModalText title='Ingredientes' text={drinkInfoObject.ingredients} /></div>
                }
                {
                    onClickInput === 'guide' ?
                        <div style={{marginTop: '16px'}} onKeyDown={resetSetOnClickInput}><TextInput value={drinkInfoObject.guide} onChange={e => setDrinkInfoObject({ ...drinkInfoObject, guide: e.target.value })} placeHolder={drinkInfoObject.guide} width='100%' height='180px' title='Modo de preparo' size='16px' textSize='12px' /></div>
                        :
                        <div onClick={() => handleSetOnClickInput('guide')}><ModalText title='Modo de preparo' text={drinkInfoObject.guide} /></div>
                }
            </TextSide>
            <CardSide>
                {drinkInfoObject.image ? <Image src={drinkInfoObject.image} height={'200px'} width={'100%'} borderRadius={'8px'} marginRight='4px' /> :
                    <BlankImage>
                        <Icon size='50px' icon='sports_bar' color={colors.white} />
                        No image
                    </BlankImage>}
                <IconRow>
                    <LeftIcon onClick={() => setOnClickInput('time')}>
                        <IconText iconColor={colors.primary} iconLeft='schedule' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={`${drinkInfoObject.time} min`} />
                        {
                            onClickInput === 'time' && <DropDown element={
                                <TimeInputContainer>
                                    <TimeInput maxLength={2} value={drinkInfoObject.time} onChange={e => setDrinkInfoObject({ ...drinkInfoObject, time: Number(e.target.value) })} onKeyDown={resetSetOnClickInput}/> min
                                </TimeInputContainer>
                            } />
                        }
                    </LeftIcon>
                    <RightIcon>
                        <IconText onClick={() => handleSetOnClickInput('alcohols')} iconColor={colors.primary} iconLeft='sports_bar' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={drinkInfoObject.base.join(', ')} />
                        {
                            onClickInput === 'alcohols' && <DropDown element={
                                <AlcoholDropDownContainer>
                                    <AlcoholListContainer>
                                        {
                                            mockAlcohols.map((alcohol, index) => (
                                                <AlcoholTextIconContainer onClick={() => handleAlcohols(alcohol)}>
                                                    <Text margin={index !== 0 ? "8px 0 0 0" : ''} weight="regular" size="14px" color={colors.grey} >{alcohol}</Text>
                                                    <>
                                                    {
                                                       verifyAlcoholIsChecked(alcohol) && <Text margin={index !== 0 ? "8px 0 0 0" : ''} weight="regular" size="14px" color={colors.grey} >*</Text>
                                                    }
                                                    </>
                                                </AlcoholTextIconContainer>
                                            ))
                                        }
                                    </AlcoholListContainer>
                                    <AddAlcoholButton onClick={() => setOnClickInput('')}>Adicionar destilado +</AddAlcoholButton>
                                </AlcoholDropDownContainer>
                            } />
                        }
                    </RightIcon>
                </IconRow>
                <IconRow>
                    <LeftIcon onClick={() => handleSetOnClickInput('dificulty')}>
                        <IconText iconColor={colors.primary} iconLeft='school' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={dificulty[drinkInfoObject.dificulty as keyof { EASY: string; MEDIUM: string; HARD: string; }] || undefined} />
                        {
                            onClickInput === 'dificulty' && <DropDown element={
                                <>
                                    <Text onClick={() => handleDificulty('EASY')} weight="regular" size="14px" color={colors.grey} >Facil</Text>
                                    <Text onClick={() => handleDificulty('MEDIUM')} margin="8px 0 0 0" weight="regular" size="14px" color={colors.grey} >Médio</Text>
                                    <Text onClick={() => handleDificulty('HARD')} margin="8px 0 0 0" weight="regular" size="14px" color={colors.grey} >Difícil</Text>
                                </>
                            } />
                        }
                    </LeftIcon>
                    <RightIcon onClick={() => handleSetOnClickInput('country')}>
                        <IconText iconColor={colors.primary} iconLeft='flag' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={drinkInfoObject.country} />
                        {
                            onClickInput === 'country' && <DropDown element={
                                <CountryContainer>
                                    {
                                        mockCountry.map((country, index) => (
                                            <Text onClick={() => handleCountry(country)} margin={index !== 0 ? "8px 0 0 0" : ''} weight="regular" size="14px" color={colors.grey} >{country}</Text>
                                        ))
                                    }
                                </CountryContainer>
                            } />
                        }
                    </RightIcon>
                </IconRow>
            </CardSide>
        </BodyContainer>
    );
}

export default DrinksModalBody;