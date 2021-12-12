import styled from "styled-components";

export const StyledApp = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

  body {
    font-size: 16px;
  }

  * {
    font-family: Rubik;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      font-weight: 400;
    }
    h1 {
      color: #223263;
      font-size: 24px;
      line-height: 43px;
      font-weight: 700;
    }
    h2 {
      color: #223263;
      font-size: 14px;
    }
    h3 {
      color: #223263;
      font-size: 14px;
      line-height: 25px;
    }
    h4 {
      color: #9098B1;
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;
    }
    h5 {
      color: #9098B1;
      font-size: 12px};
    }
    h6 {
      color: #223263;
      font-size: 16px;
      font-weight: 500;
    }
    a {
      color: #223263;
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
    }
`;

export const Title = styled.div`
  color: #223263;
  font-size: 18;
  font-weight: 700;
  text-align: center;
  margin: 100px 0 60px;

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

`;