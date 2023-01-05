import styled, { css } from 'styled-components';
import React from 'react';


interface CardContainerInterface {
    width?: string;
    height?: string;
    borderRadius?: string;
    borderColor?: string;
    backgroundImage?: string;
    children: React.ReactNode;
}


interface GenericCardContainerInterface extends Omit<CardContainerInterface, "children"> {
    typeDefinition: string
}

const GenericCardContainer = styled.div<GenericCardContainerInterface>`
    display: flex;
    width: ${({ width }) => width || 'fit-content'};
    padding: 0px;
    border-radius: ${({ borderRadius }) => borderRadius || '16px'};
    outline: none;
    border: none;
    ${({ height,borderColor,backgroundImage, typeDefinition }) => {
        switch (typeDefinition){
            case 'background':
                    return css`
                        height: ${height};
                        background-color:  ${borderColor};
                        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
                    `
            case 'main':
                    return css`
                        margin:0px;
                        height: calc(${height} - 5.2px);
                        background-image: url(${backgroundImage});
                        background-size: cover;
                    `
        }
    }};
`

const CardContainer = ({
    width,
    height,
    borderRadius,
    borderColor,
    backgroundImage,
    children,
}: CardContainerInterface) => {
    return (
        <GenericCardContainer
            data-testid='card container'
            typeDefinition={'background'}
            width={width}
            height={height}
            borderRadius={borderRadius}
            borderColor={borderColor}
        >

            <GenericCardContainer
                typeDefinition={'main'}
                width={width}
                height={height}
                borderRadius={borderRadius}
                backgroundImage={backgroundImage}
            >
                {children}
            </GenericCardContainer>
        </GenericCardContainer>
    )
}

export default CardContainer;
