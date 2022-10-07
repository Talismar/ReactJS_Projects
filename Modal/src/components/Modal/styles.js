import styled from "styled-components";
import {MdClose} from "react-icons/md"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalWrapper = styled.div`
  width: 60vw;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background-color: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

export const ModalImg = styled.img`
  width: 100%;
  height: inherit;
  border-radius: 10px 0 0 10px;
  background: #000;
`

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url(https://source.unsplash.com/random); */

  h1{
    font-size: 3vw;
  }

  p{
    margin-bottom: 1rem;
    font-size: 2vw;
  }

  button{
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    font-weight: 700;
    border: none;
    font-size: 1.5vw;
    border-radius: 5px;
  }
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: 2%;
  width: 5vw;
  height: 5vw;
  padding: 0;
  z-index: 10;
`