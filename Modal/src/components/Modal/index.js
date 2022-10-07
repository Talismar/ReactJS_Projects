import React, {useRef, useEffect, useCallback} from 'react';

import {useSpring, animated} from "react-spring"

import {Background, ModalWrapper, ModalContent, ModalImg, CloseModalButton } from "./styles"

function Modal({showModal, setShowModal}) {

  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if(modalRef.current === e.target){
      setShowModal(false)
    }
  }

  const keyPress = useCallback(e => {
    if(e.key === "Escape" && showModal){
      setShowModal(false)
    }
  },[setShowModal, showModal])

  useEffect(() => {
    document.addEventListener("keypress", keyPress)

    return () => document.removeEventListener("keypress", keyPress)
  }, [keyPress])

  return <>
    { showModal ? (
      <Background ref={modalRef} onClick={closeModal}>
        <animated.div style={animation}>
          <ModalWrapper>
            <ModalImg src={require("./img/IMG_1153.png")} alt="Description"/>

            <ModalContent>
              <h1>Are you ready?</h1>
              <p> - To Go Next Level - </p>
              <button>Submit</button>
            </ModalContent>

            <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)}/>
          </ModalWrapper>
        </animated.div>  
      </Background>
    ) : ""}
  </>;
}

export default Modal;