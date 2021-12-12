import styled from 'styled-components';

export const StyledTitle = styled.div`
    width: 80vw;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    -webkit-box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.25);
    -moz-box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.25);
    box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.25);
    margin-bottom: 40px;
    margin: 40px;
    border-radius: 5px;
    img{
        width: 175px;
    }
`; 

export const TitleDescription = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    color: rgb(34, 34, 34);
    h1{
        font-size: 20px;
    }
`; 
export const TitleText = styled.p`
    width: 20%;
`; 