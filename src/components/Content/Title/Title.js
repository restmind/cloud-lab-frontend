import React from 'react';
import { StyledTitle, TitleDescription, TitleText } from "./Title.styled.js";

function Title(props) {
    return(
        <StyledTitle>
            <h1>{props.name}</h1>
            <TitleDescription>
                <TitleText>{props.guarantee}</TitleText>
                <TitleText>{props.date_of_sale}</TitleText>
                <TitleText>{props.sales_location}</TitleText>
            </TitleDescription>
        </StyledTitle>
    );
}

export default Title;