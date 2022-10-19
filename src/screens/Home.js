import React from "react";
import { SOUNDCLOUD_LINKS } from "../constants";
import styled from "styled-components";
import SoundcloudBtn from "../assets/play.png";

const Home = () => {
  return (
    <Container>
      <DivTitle>
      </DivTitle>
        <Title>Discover Music</Title>
      {SOUNDCLOUD_LINKS?.map((link, index) => {
        const { title, url } = link;
        return (
          <LinkContainer key={index}>
            <Link href={`${url}`}>
              <Img src={SoundcloudBtn} alt="img" />
              <H2> {`${title}`}</H2>
            </Link>
          </LinkContainer>
        );
      })}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;
const LinkContainer = styled.div`
  display: flex;
position: relative;
  top: 3rem;
  right: 28rem;
  align-items: center;
  margin: 5px;
  width: 300px;
 
  transition-duration: 4s;

  @media (max-width: 990px) {
    margin-left:57rem;
    margin-top: 2rem;
    background-color: gray;
    border-radius: 25px;
    color: black;
    &:hover{
      opacity: 0.5;
    }
  }
`;
const H2 = styled.h2`
  color: #fff;
  font-size: 20px;
  display: flex;
  transition: transform 1s;
  position: relative;
  left: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  &:hover {
    opacity: 0.7;
    transform: translatey(15%);
    
  }
  @media (max-width: 990px) {
   font-family: sans-serif;
    color: black;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  color: black;
  opacity: 0.5;

  @media (max-width: 990px) {
    font-size: 40px;
    transition: ease-in-out 2s;
    color: black;
  }
`;
const DivTitle = styled.div`
  /* display: flex;
  justify-content: center; */
  background-color: aqua;
`;

const Link = styled.a`
  margin: 10px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Img = styled.img`
  width: 60px;
  display: flex;
`;
