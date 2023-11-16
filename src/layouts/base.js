/* eslint-disable max-len */
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>Tanner Pubins | SW Architect</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181818" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Tanner Pubins | SW Architect" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tanner Pubins | SW Architect" />
        <meta property="og:locale" content="en" />
        <meta property="og:url" content="https://tannerpubins.com" />
        <meta
          name="description"
          content="Hello, World! I am Tanner Pubins. I build excellent software. I'm a software architect specializing in web + mobile application development and cloud computing solutions."
        />
        <meta
          name="keywords"
          content="software, architect, developer, aws, amazon web services, cloud, freelancer, python, react"
        />
      </Head>
      {children}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BaseLayout;
