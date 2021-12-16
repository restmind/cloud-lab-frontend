import React from 'react';
import { StyledTitle, TitleDescription, TitleText } from "./Title.styled.js";

function SensorTitle(props) {
    return(
        <StyledTitle>
            <h1>{props.sensor_name}</h1>
            <TitleDescription>
                <TitleText>{props.sensor_type}</TitleText>
                <TitleText>{props.time_stamp}</TitleText>
                <TitleText>{props.sensor_data}</TitleText>
            </TitleDescription>
        </StyledTitle>
    );
}

export default SensorTitle;