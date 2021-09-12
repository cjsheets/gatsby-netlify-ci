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

## Project Foundation

Steps to bootstrap the project are listed below.

1.  **Create a Gatsby site.**

    Follow the [Gatsby quick start guide](https://www.gatsbyjs.com/docs/quick-start/).

2.  **Install dependencies.**

    Setup [eslint and (optionally) prettier](https://www.gatsbyjs.com/plugins/gatsby-plugin-prettier-eslint/).
