import styled from 'styled-components';

export const StyledCertsSection = styled.section`
  max-width: ${(props) => props.theme.breakpoints.md};

  .inner {
    display: flex;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      min-height: ${(props) => props.theme.breakpoints.xxs};
    }
  }
`;

