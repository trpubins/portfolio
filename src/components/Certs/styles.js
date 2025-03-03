import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCertsSection = styled.section`
  max-width: ${(props) => props.theme.breakpoints.md};

  .badges {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;
    justify-content: center;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Center last item when odd at small breakpoint (2-column layout) */
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    .badges > :nth-last-child(1):nth-child(odd) {
      grid-column: span 2;
      justify-self: center;
    }
  }
`;

export const StyledBadge = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img {
    width: 160px;
    height: 160px;
  }

  .badge-overlay {
    position: absolute;
    inset: 0;
    background: ${({ theme }) => `linear-gradient(
      to bottom,
      ${theme.bg.defaultLight}F2,
      ${theme.bg.default}F2
    )`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: ${({ theme }) => theme.fontw.bold};
      text-align: center;
      color: ${({ theme }) => theme.text.default};
    }
  }
`;
