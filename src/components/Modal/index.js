import React, { useRef } from "react";
import Portal from "../Portal";
import { Backdrop, Content } from "./styles";

const Modal = ({ isOpen, onClose, children }) => {
  const backdropRef = useRef();
  const handleInsideClick = (e) => {
    if (e.target === backdropRef.current) {
      onClose(false);
    }
  };
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Backdrop ref={backdropRef} onClick={handleInsideClick}>
        <Content>{children}</Content>
      </Backdrop>
    </Portal>
  );
};

export default Modal;
