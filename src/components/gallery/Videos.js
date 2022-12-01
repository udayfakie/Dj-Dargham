import React, { useRef } from "react";
import styled from "styled-components";
import video from "../../Videos/dargham-instagram-video.mp4";

const Videos = () => {
  const VideoRef = useRef();
  const HandlePlay = () => {
    VideoRef.current.play();
  };
  const HandlePause = () => {
    VideoRef.current.pause();
  };
  return (
    <Container>
      <Video ref={VideoRef} src={video} autoPlay loop />
      <Button onClick={HandlePlay}>Play</Button>
      <Button onClick={HandlePause}>pause</Button>
    </Container>
  );
};

export default Videos;
const Container = styled.div`
  width: 35%;
  height: 420px;
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  outline: none;
  @media (max-width: 765px) {
    width: 40%;
    height: 250px;
  }
`;
const Video = styled.video`
  display: flex;

  object-fit: initial;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  margin: 10px;
`;
const Button = styled.button`
  margin: 0 auto;
  border: 2px solid #1a1a1a;
  cursor: pointer;
  height: 30px;
  min-height: 20px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 15px;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 600;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  outline: none;
  width: 40%;
  color: #ffffff;
  background-color: #000000;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
`;
