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
  padding: 3.5rem;
  box-shadow: ${({ theme }) => theme.shadows.large};
  overflow-y: auto;
  max-height: 80vh;

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

export const ShowcaseWrapper = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }

  .showcase-badge {
    flex: 0 0 60%;

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex: 0 0 100%;
    }
  }

  .showcase-content {
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex: 0 0 100%;
      width: 100%;
      text-align: left;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontw.semibold};
      color: ${({ theme }) => theme.text.default};
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.md};
      line-height: 1.6;
      color: ${({ theme }) => theme.text.accent};
      margin-top: 1rem;
    }

    a {
      ${({ theme }) => theme.mixins.bigButton};
      font-size: ${(props) => props.theme.fontSize.sm};
      width: fit-content;
      margin-top: 1rem;
      align-self: center;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
      justify-content: center;
      align-self: center;

      span {
        background-color: ${({ theme }) => theme.bg.defaultLight};
        padding: 0.75rem 1.5rem;
        border-radius: 16px;
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.sm};
        color: ${({ theme }) => theme.text.default};
      }
    }
  }
`;
