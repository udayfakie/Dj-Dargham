import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faSoundcloud,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/Contact/ContactForm";
import styled from "styled-components";
import {
  FACEBOOK,
  INSTAGRAM,
  LINKEDIN,
  WHATSAPP,
  SOUNDCLOUD,
} from "../constants";
import { TARGET_BLANK } from "../constants";

const Contact = () => {

  return (
    <MainContainer>
      <ContactForm />
      <Link target={TARGET_BLANK} href={INSTAGRAM}>
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link target={TARGET_BLANK} href={FACEBOOK}>
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link target={TARGET_BLANK} href={SOUNDCLOUD}>
        <FontAwesomeIcon icon={faSoundcloud} />
      </Link>
      <Link target={TARGET_BLANK} href={WHATSAPP}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
      <Link target={TARGET_BLANK} href={LINKEDIN}>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
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

const Link = styled.a`
  position: relative;
  top: 10rem;
  margin: 10px;
  font-size: 55px;
  color: #fff;
  filter: drop-shadow(4px 3px 4px #000);
  transition-duration: 3s;

  @media (max-width: 990px) {
    top: 7rem;
  }
`;
