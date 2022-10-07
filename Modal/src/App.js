import React, {useState} from "react";
import {Button, Container} from "./styled"
import Modal from "./components/Modal";
import { GlobalStyle } from "./globalStyles";
function App() {

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <Container>
      <Button onClick={openModal}>I'm a modal</Button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <GlobalStyle/>
    </Container>
  );
}

export default App;
