/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',     // indicates that this is a static SPA export

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
};

module.exports = nextConfig;
