import { useState } from "react";
import styled from "styled-components";
import ModalText from "./ModalText";
import TitleWithIcon from "./TitleWithIcon";
import { colors } from "../../styles/colors";
import Image from "../atoms/Image";
import IconText from "../atoms/IconText";
import Icon from "../atoms/Icon/Icon";
import TextInput from "../atoms/TextInput";
import GenericTextArea from "../atoms/GenericTextArea";

interface DrinksModalBodyInterface {
    drinkInfoObject: {
        userName?: string,
        userImage?: string,
        image?: string,
        time?: number,
        dificulty?: string,
        base?: string,
        country?: string,
        guideObject?: {
            label: string,
            setGuide: React.ChangeEventHandler<HTMLInputElement> | undefined
        },
        ingredientsObject?: {
            label: string,
            setIngredients: React.ChangeEventHandler<HTMLInputElement> | undefined
        },
        titleObject?: {
            label: string,
            setTitle: React.ChangeEventHandler<HTMLInputElement> | undefined,
        },
    }
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
    height: fit-content;
    width: 30%;
`;
const RightIcon = styled.div`
    height: fit-content;
    width: 70%;
`;

const DrinksModalBody = ({
    drinkInfoObject,
}: DrinksModalBodyInterface) => {
    const [onClickInput, setOnClickInput] = useState('');
    const resetSetOnClickInput = (e: any) => {e.key === 'Enter' && setOnClickInput('')};
    return (
        <BodyContainer>
            <TextSide>
                {onClickInput === 'title' ? <div onKeyDown={resetSetOnClickInput}><GenericTextArea value={drinkInfoObject.titleObject?.label} type='input' placeHolder={drinkInfoObject.titleObject?.label} onChange={drinkInfoObject.titleObject?.setTitle} fontSize='16px' weight='bold' /></div> : <div onClick={() => setOnClickInput('title')}><TitleWithIcon title={drinkInfoObject.titleObject?.label} label={drinkInfoObject.userName} image={drinkInfoObject.userImage} /></div>}
                {
                    onClickInput === 'ingredients' ?
                        <div onKeyDown={resetSetOnClickInput}>
                            <TextInput value={drinkInfoObject.ingredientsObject?.label} onChange={drinkInfoObject.ingredientsObject?.setIngredients} width='100%' height='110px' title='Ingredientes' size='16px' textSize='12px' />
                        </div> :
                        <div onClick={() => setOnClickInput('ingredients')}><ModalText title='Ingredientes' text={drinkInfoObject.ingredientsObject?.label} /></div>
                }
                {
                    onClickInput === 'guide' ?
                        <div onKeyDown={resetSetOnClickInput}><TextInput value={drinkInfoObject.guideObject?.label} onChange={drinkInfoObject.guideObject?.setGuide} placeHolder={drinkInfoObject.guideObject?.label} width='100%' height='180px' title='Modo de preparo' size='16px' textSize='12px' /></div>
                        :
                        <div onClick={() => setOnClickInput('guide')}><ModalText title='Modo de preparo' text={drinkInfoObject.guideObject?.label}/></div>
                }
            </TextSide>
            <CardSide>
                {drinkInfoObject.image ? <Image src={drinkInfoObject.userImage} height={'40%'} width={'100%'} borderRadius={'8px'} marginRight='4px' /> :
                    <BlankImage>
                        <Icon size='50px' icon='sports_bar' color={colors.white} />
                        No image
                    </BlankImage>}
                <IconRow>
                    <LeftIcon>
                        <IconText iconColor={colors.primary} iconLeft='schedule' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={`${drinkInfoObject.time} min`} />
                    </LeftIcon>
                    <RightIcon>
                        <IconText iconColor={colors.primary} iconLeft='sports_bar' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={drinkInfoObject.base} />
                    </RightIcon>
                </IconRow>
                <IconRow>
                    <LeftIcon>
                        <IconText iconColor={colors.primary} iconLeft='school' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={drinkInfoObject.dificulty} />
                    </LeftIcon>
                    <RightIcon>
                        <IconText iconColor={colors.primary} iconLeft='flag' iconSize='18px' fontColor={colors.grey} fontSize='16px' children={drinkInfoObject.country} />
                    </RightIcon>
                </IconRow>
            </CardSide>
        </BodyContainer>
    );
}

export default DrinksModalBody;