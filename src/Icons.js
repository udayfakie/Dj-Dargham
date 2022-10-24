import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { FACEBOOK, INSTAGRAM, SOUNDCLOUD } from "./constants";
import { TARGET_BLANK } from "./constants";

const Contact = () => {
  return (
    <Container>
      <Link target={TARGET_BLANK} href={INSTAGRAM}>
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link target={TARGET_BLANK} href={SOUNDCLOUD}>
        <FontAwesomeIcon icon={faSoundcloud} />
      </Link>
      <Link target={TARGET_BLANK} href={FACEBOOK}>
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
    </Container>
  );
};

export default Contact;

const Container = styled.div``;

const Link = styled.a`
  font-size: 55px;
  color: gray;
  margin: 10px;
  filter: drop-shadow(4px 3px 4px #000);
`;
