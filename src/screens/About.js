import React from "react";
import styled from "styled-components";
import { Text } from "../constants";
import { IMG } from "../constants";

const About = () => {
  return (
    <AboutContainer>
      <Title>About me</Title>
      <SubContainer>
        <DImg src={IMG} alt="img" />
        <AboutText>
          <SubTitle>Dj / Party Producer</SubTitle>
          <Dargham>
            {Text} 
          </Dargham>
        </AboutText>
      </SubContainer>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  width: 100%;
`;
const SubContainer = styled.div`
  height: 100vh;
  max-width: 95%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-around;
  position: relative;
  bottom: 4rem;
`;
const Title = styled.h1`
  justify-content: center;
  display: flex;
  text-align: center;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media (max-width: 821px) {
  
  }
  @media (max-width: 420px) {
  color: #000;
  }
`;
const SubTitle = styled.h2`
  color: #fff;
  
  font-size: 65px;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
`;
const Dargham = styled.p`
  color: #fff;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;
`;

const DImg = styled.img`
  width: 400px;
  height: auto;
  border-radius: 30px;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const AboutText = styled.div`
  width: 650px;
`;
