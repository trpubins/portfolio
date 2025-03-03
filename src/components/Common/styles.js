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
  max-width: ${({ theme }) => theme.breakpoints.lg};
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
  ${({ theme }) => theme.mixins.flexCenter};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 15px;
  border: 0;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  cursor: pointer;
  
  .button-box {
    display: inline-block;
    position: relative;
    width: ${(props) => props.theme.hamburgerWidth};
    height: 24px;
  }

  .button-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: ${(props) => props.theme.hamburgerWidth};
    height: 2.5px;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.brand.secondary};
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: 0.12s;
    transform: rotate(225deg);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 100%;
      height: 2.5px;
      border-radius: 4px;
      background-color: ${(props) => props.theme.brand.secondary};
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: 100%;
      top: 0;
      opacity: 0;
      transition: ${({ theme }) => theme.transitions.hamBeforeActive};
    }

    &:after {
      width: 100%;
      bottom: 0;
      transform: rotate(-90deg);
      transition: ${({ theme }) => theme.transitions.hamAfterActive};
    }
  }
  
  &:hover {
    .button-inner,
    .button-inner:before,
    .button-inner:after {
      background-color: ${({ theme }) => theme.bg.reverse};
    }
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
