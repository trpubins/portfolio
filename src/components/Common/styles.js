import styled from 'styled-components';

export const ModalOverlay = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 75%;
  max-width: 1080px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.bg.default};
  padding: 4rem;
  box-shadow: ${({ theme }) => theme.shadows.large};
  overflow-y: auto;
  max-height: 90vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 90%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.accent};
  font-size: 4rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text.default};
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text.default};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ModalContent = styled.div`
  padding: 1rem 1rem;
`;

export const VideoWrapper = styled.div`
  video {
    width: 100%;
    height: auto;
  }
`;
