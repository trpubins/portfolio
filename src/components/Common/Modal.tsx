import React, { ReactNode, useRef } from "react";
import { useOnClickOutside } from '@hooks';
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
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer ref={modalRef}>
        <CloseButton onClick={onClose} aria-label="Close modal">
          <div className="button-box">
            <div className="button-inner" />
          </div>
        </CloseButton>
        {title && <ModalTitle>{title}</ModalTitle>}
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
