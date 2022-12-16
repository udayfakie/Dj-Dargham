import React, { useEffect, useRef  } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Icons from "../Icons";
import { opacityAnimation } from "../styles/GlobalStyles";

const Contact = () => {
  const form = useRef();
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qwxcffz",
      "template_nllfir8",
      form.current,
      "_Q0B1Rl4rY9YU5gJA"
    );
    form.current.reset();
    alert("successfully").then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <Container>
      <MyForm ref={form} onSubmit={sendEmail}>
        <GitInTouch>Get In Touch</GitInTouch>
        <Input
          ref={inputRef}
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Input rows="4" name="message" placeholder=" Your Message..."></Input>
        <Button type="submit" value="send">
          Submit
        </Button>
      </MyForm>
      <Icons />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  animation: ${opacityAnimation} 1s;

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10rem;
`;

const GitInTouch = styled.h2`
  color: gray;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
  filter: drop-shadow(4px 3px 4px #000);
`;
const MyForm = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-right: 30rem;
  flex-direction: column;
  padding: 2vw 4vw;
  max-width: 600px;
  border-radius: 10px;
  transition: all 1s ease-in-out;
  @media (max-width: 821px) {
    margin: 0;
  }
  @media (max-width: 425px) {
    margin: 0;
  }
`;
const Input = styled.input`
  width: 400px;
  border: 0;
  margin: 10px 0;
  padding: 15px;
  outline: none;
  color: #000;
  font-weight: 700;
  opacity: 0.5;
  background: gray;
  font-size: 20px;
  border-radius: 10px;
  filter: drop-shadow(4px 3px 4px #000);
  ::placeholder {
    font-weight: bold;
    color: #fff;
  }
`;
const Button = styled.button`
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
