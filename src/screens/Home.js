import React from "react";
import { SOUNDCLOUD_LINKS } from "../constants";
import styled from "styled-components";
import SoundcloudBtn from "../assets/play.png";

const Home = () => {
  return (
    <Container>
      <C>
        <DivTitle>
          <Title>Discover Music</Title>
        </DivTitle>
        {SOUNDCLOUD_LINKS?.map((link) => {
          return (
            <Link href={link}>
              <MyImg src={SoundcloudBtn} alt="img" />
              AFROBEATS
            </Link>
          );
        })}
      </C>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 100vh;
`;
const C = styled.div`
  position: fixed;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.h1`
  font-size: 40px;
  background-image: linear-gradient(45deg, orange, darkblue);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
const DivTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: green; */
`;

const Link = styled.a`
  /* background-color: green; */
  margin: 15px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
`;
const MyImg = styled.img`
  width: 60px;
  display: flex;
`;
