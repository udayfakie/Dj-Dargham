import video from "../../Videos/dj.mp4";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { opacityAnimation } from "../../styles/GlobalStyles";
const Videos = () => {
  return (
    <Container>
      <ReactPlayer
        height="250px"
        width="400px"
        url={video}
        light={false}
        muted={true}
        loop
        controls
      ></ReactPlayer>
    </Container>
  );
};

export default Videos;

const Container = styled.div`
  display: flex;
  animation: ${opacityAnimation} 1s;
  justify-content: center;
  margin-right: 50rem;
  transition: all 1s ease-in-out;
  @media (max-width: 821px) {
    margin: 0;
  }
  @media (max-width: 425px) {
    margin: 0;
  }
`;
