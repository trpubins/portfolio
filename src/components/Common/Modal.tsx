import React, { ReactNode } from "react";
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}



const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose} aria-label="Close modal">
          &times;
        </CloseButton>
        {title && <ModalTitle>{title}</ModalTitle>}
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
