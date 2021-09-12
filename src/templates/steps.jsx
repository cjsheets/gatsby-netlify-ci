import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { PageContainer } from '../styles/common';

function StepTemplate({ data }) {
  const { frontmatter, html: __html } = data.markdownRemark;

  return (
    <PageContainer>
      <title>Gatsby Netlify CI</title>
      <h1>{frontmatter.title}</h1>
      <Link to="/">👈 Back</Link>
      <section
        dangerouslySetInnerHTML={{ __html }} // eslint-disable-line react/no-danger
        itemProp="articleBody"
      />
    </PageContainer>
  );
}

export default StepTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        order
        slug
        title
      }
    }
  }
`;
