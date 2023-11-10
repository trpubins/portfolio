/* eslint-disable max-len */
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLogo = ({ theme, width = 50, height = 50, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 300 300" {...props}>
      <g fill={theme.brand.primary} stroke={theme.brand.primary}>
        <path
          id="Border"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 150 277 L 41 213 L 41 87 L 150 23 L 259 87 L 259 213 L 150 277 Z M 150 268 L 253 209 L 253 91 L 150 32 L 47 91 L 47 209 L 150 268 Z"
        />
        <path
          id="A"
          d="M 178 175 L 123 175 L 108 206 L 88 206 L 151 70 L 212 206 L 191 206 Z M 170 157 L 151 114 L 131 157 Z"
        />
      </g>
    </svg>
  );
};

IconLogo.propTypes = {
  theme: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withTheme(IconLogo);
