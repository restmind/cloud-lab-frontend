import React from "react";
import { FooterStyled, IconSet, TextColumn, Divider } from "./Footer.styled";

const Footer = () => {
  return (
    <React.Fragment>
      <Divider></Divider>
      <FooterStyled>
        <TextColumn>
          <h5 style={{ fontWeight: "500" }}>Social Media</h5>
          <IconSet>
            <img src="\images\instagram.png" alt="instagram icon"></img>
            <img src="\images\facebook.png" alt="facebook icon"></img>
            <img src="\images\telegram.png" alt="telegram icon"></img>
          </IconSet>
          <h5>Â© Copyright ipsum dolor Lore </h5>
        </TextColumn>
        <TextColumn>
          <h5 style={{ fontWeight: "500" }}>Lorem ipsum dolor</h5>
          <h5>Lorem ipsum dolor</h5>
          <h5>Lorem ipsum dolor</h5>
        </TextColumn>
        <TextColumn>
          <h5 style={{ fontWeight: "500" }}>Lorem ipsum dolor</h5>
          <h5>FAQ</h5>
          <h5>Privacy policy</h5>
        </TextColumn>
      </FooterStyled>
    </React.Fragment>
  );
};

export default Footer;