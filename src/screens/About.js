import React from "react";
import styled from "styled-components";
import { Text } from "../constants";

const About = () => {
  return (
    <Container>
      <Title>About me</Title>
      <SubTitle>Dj / Party Producer</SubTitle>
      <Dargham>{Text}</Dargham>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
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
  text-align: center;
  color: Orange;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  text-transform: capitalize;

  @media (max-width: 821px) {
  }
  @media (max-width: 420px) {
    color: orange;
  }
`;
const SubTitle = styled.h2`
  color: darkorange;

  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
`;
const Dargham = styled.p`
  color: #edd5cd;
  width: 30rem;
  letter-spacing: 1px;
  font-weight: 600;
  @media (max-width: 420px) {
    width: 25rem;
  }
`;
