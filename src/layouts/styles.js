import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 150px;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 200px 100px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 150px 50px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 125px 25px;
  }

  &.fillHeight {
    padding: 0 100px;

    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      padding: 0 100px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      padding: 0 50px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      padding: 0 25px;
    }
  }
`;

export const SkipToContentLink = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 18px 23px;
    outline: 0;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.bg.default};
    color: ${(props) => props.theme.text.default};
    font-family: ${(props) => props.theme.fontFamily.fontMono};
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    overflow: auto;
    transition: ${(props) => props.theme.transitions.default};
    z-index: 99;
  }
`;

export const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

export const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
    width: 100%;
    max-width: 140px;
    margin: 0 auto 10px;
    color: ${(props) => props.theme.text.accent};
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        fill: ${(props) => props.theme.text.accent};
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const StyledMadeWith = styled.div`
  p {
    color: ${(props) => props.theme.text.accent};
    font-family: ${(props) => props.theme.fontFamily.fontMono};
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: 1;
  }
`;

export const StyledCredit = styled.div`
  color: ${(props) => props.theme.text.accent};
  font-family: ${(props) => props.theme.fontFamily.fontMono};
  font-size: ${(props) => props.theme.fontSize.xxs};
  line-height: 1;

  a {
    font-size: ${(props) => props.theme.fontSize.xxs};
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      width: auto;
      height: 15px;
      margin-right: 5px;
    }
  }
`;
