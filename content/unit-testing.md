---
slug: '/unit-testing'
title: 'Unit Testing'
order: 3
---

## Add Jest

See [this commit](https://github.com/cjsheets/gatsby-netlify-ci/pull/2/files#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519) for packages and modules needed to UT this gatsby project.

Choose coverage thresholds for your project:

```
"coverageThreshold": {
  "global": {
    "branches": 50,
    "functions": 50,
    "lines": 50,
    "statements": 50
  }
},
```

## Setup a GitHub Workflow

See [this commit](https://github.com/cjsheets/gatsby-netlify-ci/pull/2/files#diff-1db27d93186e46d3b441ece35801b244db8ee144ff1405ca27a163bfe878957f) where a GitHub workflow was added to:

1. Checkout the branch
1. Setup Node and install node_modules
1. Run Unit Tests
1. Publish the results contained in the `junit.xml`
1. Publish code coverage contained in the `lcov.info`

This change uses GitHub Actions to publish the results of UTs to pull requests on GitHub as comments.
