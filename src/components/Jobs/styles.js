import styled from 'styled-components';

export const StyledJobsSection = styled.section`
  max-width: ${(props) => props.theme.breakpoints.md};

  .inner {
    display: flex;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      min-height: ${(props) => props.theme.breakpoints.xs};
    }
  }
`;

export const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding: 0 50px;
    margin-left: -50px;
    margin-right: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: calc(100% + 50px);
    padding: 0 25px;
    margin: 0 -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        margin-left: 50px;
      }
      @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        padding-right: 50px;
      }
      @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
        padding-right: 25px;
      }
    }
  }
`;

export const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.tabHeight};
  padding: 0 20px 2px;
  border-left: 2px solid
    ${({ isActive, theme }) => (isActive ? theme.brand.primary : theme.bg.defaultLight)};
  background-color: transparent;
  color: ${({ isActive, theme }) => (isActive ? theme.brand.primary : theme.text.accent)};
  font-family: ${(props) => props.theme.fontFamily.fontMono};
  font-size: ${(props) => props.theme.fontSize.sm};
  text-align: left;
  white-space: nowrap;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 15px 2px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: ${(props) => props.theme.tabWidth};
    width: ${(props) => props.theme.tabWidth};
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid
      ${({ isActive, theme }) => (isActive ? theme.brand.primary : theme.bg.defaultLight)};
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.text.reverse};
  }
`;

export const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: ${(props) => props.theme.tabHeight};
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.brand.primary};
  transform: translateY(
    calc(${({ activeTabId }) => activeTabId} * ${(props) => props.theme.tabHeight})
  );
  transition: transform 0.25s ${(props) => props.theme.transitions.easing};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: ${(props) => props.theme.tabWidth};
    height: 2px;
    margin-left: 50px;
    transform: translateX(
      calc(${({ activeTabId }) => activeTabId} * ${(props) => props.theme.tabWidth})
    );
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    margin-left: 25px;
  }
`;

export const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-left: 0;
  }
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontw.medium};
    line-height: 1.3;

    .company {
      color: ${(props) => props.theme.brand.primary};

      &::before {
        content: '@';
        margin: 0 5px;
      }

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        display: block;

        &::before {
          margin-right: 5px;
          margin-left: 0;
        }
      }
    }

    a {
      font-size: ${(props) => props.theme.fontSize.lg};
    }
  }

  .inline-link {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  .range {
    margin-bottom: 25px;
    color: ${(props) => props.theme.text.accent};
    font-family: ${(props) => props.theme.fontFamily.fontMono};
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;
