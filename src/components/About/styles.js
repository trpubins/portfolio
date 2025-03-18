import styled from 'styled-components';

export const StyledAboutSection = styled.section`
  max-width: 100%;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      display: block;
    }
  }
`;

export const StyledText = styled.div`
  p {
    color: ${(props) => props.theme.text.accent};
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(125px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 200px));
      grid-auto-flow: column;
      grid-template-rows: repeat(var(--total-rows, 4), auto);
      gap: 10px;
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: ${(props) => props.theme.fontFamily.fontMono};
      font-size: ${(props) => props.theme.fontSize.sm};
      color: ${(props) => props.theme.text.accent};

      &:before {
        content: '▹';
        position: absolute;
        top: 1px;
        left: 0;
        color: ${(props) => props.theme.brand.primary};
        font-size: ${(props) => props.theme.fontSize.sm};
        line-height: 12px;
      }
    }
  }
`;

export const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 30px auto 30px;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }
    }

    .img {
      object-fit: cover;
      max-width: 100%;
      position: relative;
      border-radius: ${(props) => props.theme.borderRadius};
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${(props) => props.theme.borderRadius};
      transition: ${(props) => props.theme.transitions.default};
    }

    &:before {
      top: 0;
      left: 0;
      background-color: ${(props) => props.theme.bg.default};
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid ${(props) => props.theme.brand.primary};
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;
