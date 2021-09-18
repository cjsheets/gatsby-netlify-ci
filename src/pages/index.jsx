import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { PageContainer } from '../styles/common';

function IndexPage({ data }) {
  const { nodes } = data.allMarkdownRemark;

  return (
    <PageContainer>
      <title>Gatsby Netlify CI</title>
      <h1>🤖 Continuous Integration Prototype</h1>
      <p>Common CI patterns with Github Actions, Netlify and Gatsby.</p>

      <ol>
        {nodes.map(({ id, frontmatter: fm }) => (
          <li>
            <Link to={fm.slug} key={id}>
              {fm.title}


            </Link>
          </li>
        ))}
      </ol>
    </PageContainer>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      nodes {
        id
        frontmatter {
          title
          slug
          order
        }
      }
    }
  }
`;
