/* eslint-disable max-len */
import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLoader = ({ theme }) => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    width={300}
    height={300}
    viewBox="0 0 300 300"
  >
    <title>Loader Logo</title>
    <path
      id="Border"
      fill={theme.brand.primary}
      fillRule="evenodd"
      stroke={theme.brand.primary}
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M 150 277 L 128.130859 264.160156 L 135.683594 259.798828 L 150 268 L 253 209 L 253 91 L 150 32 L 47 91 L 47 209 L 110.119141 245.15625 L 102.880859 249.333984 L 41 213 L 41 87 L 150 23 L 259 87 L 259 213 L 150 277 Z"
    />
    <path
      id="Letters"
      fill={theme.brand.primary}
      fillRule="evenodd"
      stroke="none"
      d="M 103.064453 255.651443 C 101.713776 255.621185 100.412369 254.908905 99.6875 253.653397 L 94.6875 244.99324 C 93.582939 243.080078 94.237228 240.632965 96.150391 239.528397 L 122 224.604568 L 122 111.9991 L 76 111.9991 L 76 93.9991 L 122 93.9991 L 140 93.9991 L 200 93.9991 L 200 94.161209 C 200.186157 93.979767 200.286346 93.974319 201.554688 94.032303 C 202.305573 94.066635 203.509613 94.180603 204.228516 94.284256 C 204.947418 94.387924 206.076233 94.587387 206.738281 94.727615 C 207.40033 94.867859 208.446503 95.128433 209.0625 95.30574 C 209.678497 95.483047 210.74913 95.836105 211.441406 96.090897 C 212.133682 96.345688 213.593872 96.998581 214.685547 97.542068 C 215.906342 98.149841 217.23967 98.907959 218.150391 99.512772 C 218.964767 100.053604 220.184662 100.939926 220.861328 101.481522 C 221.53801 102.023132 222.702209 103.078278 223.449219 103.825272 C 224.196213 104.572281 225.251358 105.736481 225.792969 106.413162 C 226.334564 107.089828 227.218933 108.309723 227.759766 109.1241 C 228.364578 110.034821 229.124649 111.368149 229.732422 112.588943 C 230.275909 113.680603 230.928802 115.140808 231.183594 115.833084 C 231.43837 116.52536 231.794785 117.602875 231.974609 118.227615 C 232.154434 118.852341 232.430237 119.985382 232.587891 120.745193 C 232.745529 121.505005 232.953979 122.758469 233.050781 123.53035 C 233.181213 124.570251 233.226563 125.597198 233.226563 127.4991 C 233.226563 129.400986 233.181213 130.429901 233.050781 131.469803 C 232.953979 132.241684 232.745529 133.495148 232.587891 134.254959 C 232.430237 135.014786 232.154434 136.147812 231.974609 136.772537 C 231.794785 137.397278 231.43837 138.474792 231.183594 139.167068 C 230.928802 139.859344 230.275909 141.31955 229.732422 142.411209 C 229.124649 143.632019 228.364578 144.965332 227.759766 145.876053 C 227.218933 146.69043 226.334564 147.910309 225.792969 148.58699 C 225.251358 149.263657 224.196213 150.427887 223.449219 151.174881 C 222.702209 151.92189 221.53801 152.977036 220.861328 153.518631 C 220.184662 154.060242 218.964767 154.946548 218.150391 155.487381 C 217.23967 156.092194 215.906342 156.850311 214.685547 157.458084 C 213.593872 158.001572 212.133682 158.654465 211.441406 158.909256 C 210.74913 159.164032 209.678497 159.517105 209.0625 159.694412 C 208.446503 159.871704 207.40033 160.132294 206.738281 160.272537 C 206.076233 160.412766 204.947418 160.612228 204.228516 160.715897 C 203.509613 160.81955 202.305573 160.931564 201.554688 160.965897 C 201.063263 160.988358 200.748749 161.001877 200.535156 160.9991 C 200.196564 160.994675 200.114578 160.948685 200 160.83699 L 200 160.9991 L 178 160.9991 L 178 222.628006 L 160 228.9991 L 160 160.9991 L 160 142.9991 L 178 142.9991 L 199.777344 142.9991 C 199.777344 142.994934 199.777344 142.9935 199.777344 142.989334 C 199.823853 142.987503 199.851593 142.987701 199.90625 142.985428 C 200.287842 142.969543 200.898331 142.916199 201.263672 142.86824 C 201.628998 142.820267 202.202606 142.728043 202.539063 142.663162 C 202.875519 142.598267 203.407654 142.477615 203.720703 142.395584 C 204.033737 142.313553 204.577881 142.150192 204.929688 142.032303 C 205.281494 141.914413 206.023346 141.611893 206.578125 141.360428 C 207.198532 141.079224 207.875061 140.728149 208.337891 140.448318 C 208.75174 140.198074 209.372925 139.788742 209.716797 139.538162 C 210.060684 139.287567 210.651627 138.799805 211.03125 138.454178 C 211.410873 138.108551 211.947418 137.569992 212.222656 137.256912 C 212.497894 136.943817 212.947815 136.379807 213.222656 136.003006 C 213.530029 135.581619 213.915756 134.96434 214.224609 134.39949 C 214.500809 133.894379 214.83342 133.217834 214.962891 132.897537 C 215.092377 132.577225 215.271896 132.079163 215.363281 131.790115 C 215.454666 131.501053 215.595673 130.9776 215.675781 130.626053 C 215.755905 130.27449 215.860947 129.694122 215.910156 129.33699 C 215.97644 128.855835 216 128.379074 216 127.4991 C 216 126.619125 215.97644 126.144302 215.910156 125.663162 C 215.860947 125.306015 215.755905 124.725662 215.675781 124.3741 C 215.595673 124.022552 215.454666 123.4991 215.363281 123.210037 C 215.271896 122.92099 215.092377 122.422928 214.962891 122.102615 C 214.83342 121.782318 214.500809 121.105759 214.224609 120.600662 C 213.915756 120.035812 213.530029 119.418518 213.222656 118.997147 C 212.947815 118.620346 212.497894 118.056335 212.222656 117.74324 C 211.947418 117.430161 211.410873 116.891602 211.03125 116.545975 C 210.651627 116.200348 210.060684 115.71257 209.716797 115.46199 C 209.372925 115.211395 208.75174 114.802063 208.337891 114.551834 C 207.875061 114.271988 207.198532 113.920929 206.578125 113.639725 C 206.023346 113.38826 205.281494 113.085739 204.929688 112.96785 C 204.577881 112.84996 204.033737 112.6866 203.720703 112.604568 C 203.407654 112.522537 202.875519 112.401886 202.539063 112.33699 C 202.202606 112.27211 201.628998 112.179886 201.263672 112.131912 C 200.898331 112.083954 200.287842 112.030609 199.90625 112.014725 C 199.851593 112.012451 199.823853 112.01265 199.777344 112.010818 C 199.777344 112.005814 199.777344 112.004089 199.777344 111.9991 L 140 111.9991 L 140 231.391678 L 140 233.77449 L 140 233.9991 L 139.921875 233.9991 C 139.60675 234.832184 139.013214 235.565857 138.181641 236.045975 L 105.150391 255.116287 C 104.492737 255.495972 103.771957 255.667297 103.064453 255.651443 Z"
    />
  </svg>
);

IconLoader.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(IconLoader);
