import theme from '@themes/common';

const getScrollRevealConfig = () => {
  const mdBreakpoint = parseInt(theme.breakpoints.md);
  const isMobile = window.innerWidth < mdBreakpoint;

  return {
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay: 200,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: isMobile ? 0.05 : 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
  };
};

export const srConfig = () => {
  if (typeof window !== 'undefined') {
    return getScrollRevealConfig();
  }
  return {};
};
