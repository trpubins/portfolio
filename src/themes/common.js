import mixins from '@styles/mixins';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  borderRadius: '12px',
  borderRadiusButton: '0.75rem',
  hamburgerWidth: '3rem',
  tabHeight: '48px',
  tabWidth: '148px',
  fontFamily: {
    fontSans: 'Open Sans, -apple-system, BlinkMacSystemFont,Segoe UI, Helvetica, Arial',
    fontMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
  },
  brand: {
    primary: '#F8845D',
    secondary: '#4E596F',
    accent: '#F44D62',
  },
  fontSize: {
    xxs: '0.9rem',
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.4rem',
    lg: '1.8rem',
    xl: '2.2rem',
    xxl: '2.6rem',
  },
  fontw: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  breakpoints: {
    xs: '360px',      // Small phones
    sm: '480px',      // Large phones
    md: '640px',      // Phablets / small tablets
    lg: '768px',      // Tablets
    xl: '960px',      // Small laptops / large tablets
    xxl: '1080px',    // Standard laptops
    xxxl: '1280px',   // Desktops
    ultra: '1536px',  // Large desktops / 2K screens
    max: '1920px',    // 1080p+ screens
  },
  transitions: {
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    default: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    hamBefore: 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in',
    hamBeforeActive: 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s',
    hamAfter: 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    hamAfterActive:
      'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s',
  },
  mixins,
};
