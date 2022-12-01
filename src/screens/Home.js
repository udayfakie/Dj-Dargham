import React from "react";
import { SOUNDCLOUD_LINKS } from "../constants";
import styled from "styled-components";
import SoundcloudBtn from "../assets/icon-soundcloud-play.png";
import Videos from '../components/gallery/Videos'
const Home = () => {
  return (
    <Container>
      <Title>Discover Music</Title>
      <SubContaine>
        {SOUNDCLOUD_LINKS?.map((link, index) => {
          const { title, url } = link;
          return (
            <LinkContainer key={index}>
              <Link target="_blank" href={`${url}`}>
                <Img src={SoundcloudBtn} alt="img" />
                <H2> {`${title}`}</H2>
              </Link>
            </LinkContainer>
          );
        })}
      </SubContaine>
    <Videos/>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  `;
const SubContaine = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: flex-start;
  flex-wrap: wrap;
  position: absolute;
  bottom: 2rem;
`;

const LinkContainer = styled.div`
  width: 15%;
  margin: 10px;

  transition-duration: 4s;
  @media (max-width: 600px) {
    width: 90%;
    background-color: gray;
    border-radius: 25px;
    color: black;
    &:hover {
      opacity: 0.5;
    }
  }
  @media (max-width: 821px) {
    width: 40%;
  }
`;
const H2 = styled.h2`
  align-items: center;
  display: flex;
  color: #fff;
  font-size: 1rem;
  transition: transform 1s;
  margin-left: 10px;
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
margin: 0 auto;
  font-size: 3rem;
  color: black;
  opacity: 0.5;

  @media (max-width: 990px) {
    font-size: 40px;
    transition: ease-in-out 2s;
    color: black;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  flex-wrap: wrap;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 2.5rem;
  /* color: #f50; */
  transition: all 1s ease-in-out;
  :hover {
    opacity: 0.5;
  }
`;
