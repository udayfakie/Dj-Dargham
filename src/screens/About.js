import React from "react";
import styled from "styled-components";
import { Text } from "../constants";
import { opacityAnimation } from "../styles/GlobalStyles";

const About = () => {
  return (
    <Container>
      <Title>About me</Title>
      <Dargham>
        <SubTitle>Dj / Party Producer</SubTitle>
        {Text}
      </Dargham>
    </Container>
  );
};

export default About;

const Container = styled.div`
  animation: ${opacityAnimation} 1s;
  height: 100vh;
  width: 100%;
  align-items: flex-start;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 821px) {
  }
  @media (max-width: 420px) {
  }
`;
const Title = styled.h1`
  justify-content: center;
  display: flex;
  margin: 0 auto;
  text-align: center;
  color: #000;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  text-transform: capitalize;

  @media (max-width: 821px) {
  }
  @media (max-width: 420px) {
    font-size: 28px;
  }
`;
const SubTitle = styled.h2`
  color: black;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
`;
const Dargham = styled.p`
  color:orange ;
  width: 35rem;
  font-size: 20px;
  margin-left: 40px;
  letter-spacing: 1px;
  font-weight: 600;
  transition: all 0.1s ease-in-out;
  @media (max-width: 821px) {
    width: 30rem;
  }
  @media (max-width: 420px) {
    width: 25rem;
  }
`;
