import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Button = styled.button`
  width: 40vw;
  padding: 20px 32px; 
  border-radius: 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url(https://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-size: cover;

  /* background-origin: border-box; */
  background-clip: border-box;
  
  /* border: 4px dashed #141414; */
  border: none;
  font-weight: 700;
  font-size: 5vw;
  cursor: pointer;
`