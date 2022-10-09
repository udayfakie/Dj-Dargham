import React from "react";
import styled from "styled-components";
import Img from "../assets/IMG_2273.JPG";

const About = () => {
  return (
    <AboutContainer>
      <Maintaine>
        <DImg src={Img} alt="img" />
        <AboutText>
          <Title>About Us</Title>
          <SubTitle>
            Dj<StyledSpan> / Party Producer</StyledSpan>
          </SubTitle>
          <Dargham>
            DJ Dargham's Roadshow aims to exceed all your entertainment
            expectations. Offering a bespoke musical experience, whatever the
            occasion. DJ Dargham will guarantee a professional service,whether
            it be a wedding, birthday or corporate event, we promise to make it
            memorable for you and your guests. We cater for clients of all
            backgrounds, ensuring a service specific to your requirements,
            aiming to make your event unique from others At every event the DJ
            Dargham Roadshow provides state of the art technology, leaving you
            with both a majestic musical and visual experience. Rest assured if
            you book DJ Dargham Roadshow for your event, you have guaranteed
            yourselves an outstanding entertainment package.
          </Dargham>
        </AboutText>
      </Maintaine>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  width: 100%;
  /* padding: 78px 0px ; */
`;
const Title = styled.h1`
  color: darkblue;
  font-size: 80px;
  text-transform: capitalize;
  margin-bottom: 20px;
`;
const SubTitle = styled.h2`
  color: gold;
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
`;
const Dargham = styled.p`
  color: #fcfc;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;
`;

const DImg = styled.img`
  width: 420px;
  height: auto;
`;

const Maintaine = styled.div`
  width: 1130;
  max-width: 95%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const AboutText = styled.div`
  width: 550px;
`;
const StyledSpan = styled.span`
  color: orange;
`;
