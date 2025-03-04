# portfolio

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

| | |
| --- | --- |
| Build | [![Build Status](https://github.com/trpubins/portfolio/actions/workflows/build.yaml/badge.svg)](https://github.com/trpubins/portfolio/actions/workflows/build.yaml) ![Software Version](https://img.shields.io/badge/latest-v1.4.0-blue) ![Node Versions](https://img.shields.io/badge/node-18-blue?logo=nodedotjs) |

## 🏁 Getting Started

### Prerequisites

1. Node.js installed on system OR [nvm](https://github.com/nvm-sh/nvm) with initialization script located here: `$(HOME)/.nvm/nvm.sh`

### Set Up Environment

To create the dev environment, navigate to the project root directory and run the following

```bash
make setup
```

>NOTE: This command installs the correct version of Node (if `nvm` is present)
and installs required dependencies as well as other developer tools.

To launch the development server and enable hot reloads, run

```bash
make dev
```

Open [http://localhost:3000](http://localhost:3000) with a browser to view the rendered result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

## 🛠️ Building for Production

Site files can be found in the `out` folder after the build completes. Build the static site with

```bash
make build
```

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 🚀 Deployment

This project is intended to be deployed as a Single-Page Application (SPA) hosted as a static site. Next.js allows for [static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) using configuration options.

## 🙌 Attributions

This project is adapted from:

- [Brittany Chiang](https://github.com/bchiang7/v4) for original UI
- [Junior García](https://github.com/jrgarciadev/portfoliov2) for improvements using the Next.js framework
