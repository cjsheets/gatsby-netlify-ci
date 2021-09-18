import * as config from '../gatsby-config';
import { createPages } from '../gatsby-node';

describe('Gatsby Config', () => {
  it('should expose the correct props', () => {
    expect(config).toMatchObject(
      expect.objectContaining({
        siteMetadata: expect.any(Object),
        plugins: expect.arrayContaining(['gatsby-plugin-netlify-cms']),
      })
    );
  });
});

describe('Gatsby Node', () => {
  it('exports createPages', () => {
    const graphql = jest.fn();
    const actions = { createPage: jest.fn() };
    createPages({ graphql, actions });

    expect(graphql).toBeCalledWith(expect.stringContaining('allMarkdownRemark'));
  });
});
