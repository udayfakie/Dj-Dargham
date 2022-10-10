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

const Iconss = styled.div`
position: relative;
top: 10rem;
@media screen and (max-width:820px) {
  top: 2rem;
  transition: ease-in-out .7s;
  /* transition: ease-out .7s; */
}
  
`;

const IiconsLinks = styled.a`
  margin: 10px;
  font-size: 55px;
  color: #fff;
  filter: drop-shadow(4px 3px 4px #000);
`;
