import styled from 'styled-components';

export const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${(props) => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: ${(props) => props.theme.bg.reverse};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    left: ${(props) => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${(props) => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
  
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.bg.reverse};
    transition: ${(props) => props.theme.transitions.default};
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    visibility: ${(props) => (props.isMounted ? 'visible' : 'hidden')};
  }
`;
