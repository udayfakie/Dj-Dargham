import React from "react";
import { SOUNDCLOUD_LINKS } from "../constants";
import styled from "styled-components";
import SoundcloudBtn from "../assets/play.png";


const Home = () => {
  return (
    <Container>
      <DivTitle>
        <Title>Discover Music</Title>
      </DivTitle>
      {SOUNDCLOUD_LINKS?.map((link, index) => {
        return (
          <Link key={index} href={link}>
            <Img src={SoundcloudBtn} alt="img" />
            AFROBEATS
          </Link>
        );
      })}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 80px;
  color: #000;
`;
const DivTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  margin: 15px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
`;
const Img = styled.img`
  width: 60px;
  display: flex;
`;
