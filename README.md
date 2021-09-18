# 🤖 Continuous Integration Prototype

Simple prototype of common CI patterns implemented with Gatsby, Github Actions and Netlify.

## Overview

A robust CI pipeline should include some variation of the following steps:

1. Git branch conventions
1. Linting\*
1. Unit Testing
1. Acceptance Testing
1. Monitoring

\* I'd group type-checking with linting. For simplicity this project is implemented in JS instead of TS.

## Setting Up Gatsby

This goal of this project is to focus on CI, so I tried to keep the Gatsby configuration as simple as possible.

I chose to include prettier and styled-components but not typescript to reduce boilerplate.

1. Follow the Gatsby [quick start guide](https://www.gatsbyjs.com/docs/quick-start/).
1. Setup [eslint and (optionally) prettier](https://www.gatsbyjs.com/plugins/gatsby-plugin-prettier-eslint/).
1. Configure gatsby-config.js and gatsby-node.js
