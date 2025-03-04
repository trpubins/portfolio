import styled from 'styled-components';
import { Hero, About, Featured, Jobs, Projects, Certs, Contact } from '@components';

const StyledMainContainer = styled.section`
  width: 100%;
  max-width: 900px;
  counter-reset: section;
  section {
    margin: 0 auto;
    padding: 80px 0;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      padding: 50px 0;
    }
  }
`;

const IndexPage = () => (
  <StyledMainContainer className="fillHeight">
    <Hero />
    <About />
    <Jobs />
    <Featured />
    <Certs />
    <Contact />
  </StyledMainContainer>
);

export default IndexPage;
