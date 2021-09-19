# 🤖 Continuous Integration Prototype

![example workflow](https://github.com/cjsheets/gatsby-netlify-ci/actions/workflows/on-pull-request.yml/badge.svg)

![Netlify Status](https://img.shields.io/netlify/f9a9caf9-fae4-4d71-80be-87563c371d04)
![Uptime Robot status](https://img.shields.io/uptimerobot/status/m789227343-2d706ab9076fd7bf0341772f.svg)
![Uptime Robot ratio](https://img.shields.io/uptimerobot/ratio/m789227343-2d706ab9076fd7bf0341772f.svg)

---

Barebones prototype of CI patterns using Gatsby, Github Actions and Netlify.

## Overview

App features and descriptions include:

1. [Branch Protection](https://gatsby-netlify-ci.netlify.app/branch-protection)
1. [Linting](https://gatsby-netlify-ci.netlify.app/linting)\*
1. [Unit Testing](https://gatsby-netlify-ci.netlify.app/unit-testing)
1. [Acceptance Testing](https://gatsby-netlify-ci.netlify.app/acceptance-testing)
1. [Automated Deployments](https://gatsby-netlify-ci.netlify.app/automated-deployments)
1. [Monitoring](https://gatsby-netlify-ci.netlify.app/branch-monitoring)

\* I'd usually include type-checking, but this repo is in javascript for simplicity.

## Setting Up Gatsby

Gatsby configuration as simple as possible to keep the project focused on CI.

I chose to include prettier and styled-components but not typescript to reduce boilerplate.

1. Follow the Gatsby [quick start guide](https://www.gatsbyjs.com/docs/quick-start/).
1. Setup [eslint and (optionally) prettier](https://www.gatsbyjs.com/plugins/gatsby-plugin-prettier-eslint/).
1. Configure gatsby-config.js and gatsby-node.js

## Notable dependencies

- [GitHub Actions](https://github.com/features/actions) for CI
- [Jest](https://jestjs.io/) for unit testing
  - [Enzyme](https://enzymejs.github.io/enzyme/) for testing react components
- [Playwright](https://playwright.dev/) for browser testing
- [UptimeRobot](https://uptimerobot.com/) for uptime monitoring
