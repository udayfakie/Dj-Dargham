import React from 'react'
import styled from 'styled-components'
import img from "../assets/garr.jpg"
import img2 from "../assets/darg2.jpg"

const Gallery = () => {
  return (
    <Container>
      <Img src={img} alt='img'/>
      <Img src={img2} alt='img'/>
    </Container>
  )
}

export default Gallery

const Container = styled.div`

display: flex;
justify-content: center;
width: 100%;
height: 100vh;
`
const Img = styled.img`
margin: 10px;
border-radius: 15px;
width: 250px;
height: 300px;
`

