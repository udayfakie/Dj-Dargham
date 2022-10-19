import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qwxcffz', 'template_nllfir8', form.current, '_Q0B1Rl4rY9YU5gJA')
    form.current.reset()
    alert("successfully")
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <MyForm ref={form} onSubmit={sendEmail}>
      <GitInTouch>Get In Touch</GitInTouch>
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <Input rows="4" name="message" placeholder=" Your Message..."></Input>
      <Button type="submit" value="send">Submit</Button>
    </MyForm>
  );
};

export default ContactForm;

const GitInTouch = styled.h2`
  color: gray;
  font-size: 40px;
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
  margin-bottom: 6rem;
`;
const Input = styled.input`
  border: 0;
  margin: 10px 0;
  padding: 20px;
  outline: none;
  background: #f5f5f5;
  font-size: 20px;
  border-radius: 10px;
  filter: drop-shadow(4px 3px 4px #000);
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
