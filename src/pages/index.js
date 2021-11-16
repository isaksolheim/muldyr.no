import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <main>
      <title>muldyr.no</title>
      <Img fixed={data.file.childImageSharp.fixed} />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "muldyr.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
