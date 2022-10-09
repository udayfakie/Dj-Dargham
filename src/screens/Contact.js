import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faSoundcloud,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/Contact/ContactForm";
import styled from "styled-components";

const Contact = () => {
  return (
    <MainContainer>
      <ContactForm />
      <Iconss>
        <IiconsLinks href="https://www.facebook.com/dargham.azhrie">
          <FontAwesomeIcon icon={faInstagram} />
        </IiconsLinks>
        <IiconsLinks href="https://www.facebook.com/dargham.azhrie">
          <FontAwesomeIcon icon={faFacebook} />
        </IiconsLinks>
        <IiconsLinks href="https://soundcloud.com/dargham-azhri">
          <FontAwesomeIcon icon={faSoundcloud} />
        </IiconsLinks>
        <IiconsLinks href="https://www.facebook.com/dargham.azhrie">
          <FontAwesomeIcon icon={faTwitter} />
        </IiconsLinks>
        <IiconsLinks href="https://www.facebook.com/dargham.azhrie">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IiconsLinks>
      </Iconss>
    </MainContainer>
  );
};

export default Contact;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GitInTouch = styled.h2`
  color: gray;
  font-weight: 800;
  margin-bottom: 20px;
  filter: drop-shadow(4px 3px 4px #000);
`;
const MyForm = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2vw 4vw;

  max-width: 600px;
  border-radius: 10px;
  position: absolute;
`;

const InputsType = styled.input`
  border: 0;
  margin: 10px 0;
  padding: 20px;
  outline: none;
  background: #f5f5f5;
  font-size: 20px;
  border-radius: 10px;
  filter: drop-shadow(4px 3px 4px #000);
`;

const BBtn = styled.button`
  padding: 15px;
  background-image: linear-gradient(black, white);
  color: #fff;
  font-size: 18px;
  border: 0;
  outline: none;
  cursor: pointer;
  width: 150px;
  margin: 20px auto 0;
  border-radius: 15px;
  font-weight: 700;
  color: black;
  filter: drop-shadow(4px 3px 4px #000);
`;

const Iconss = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  margin: 55px;
`;

const IiconsLinks = styled.a`
  margin: 10px;
  font-size: 55px;
  color: #fff;
  filter: drop-shadow(4px 3px 4px #000);
`;
