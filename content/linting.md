---
slug: '/linting'
title: 'Linting'
order: 2
---

## Add ESlint

See [this commit](https://github.com/cjsheets/gatsby-netlify-ci/pull/2/files#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519) for packages needed to lint this gatsby project.

I would typically also include typescript.

## Add Prettier (optional)

See the commit above for prettier integrations as well.

## Add Build Validation

With prettier integrated into eslint, you can run a single npm run lint task to validate code during PRs.
