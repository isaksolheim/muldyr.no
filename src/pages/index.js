import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import './index.css';

const IndexPage = ({ data }) => (
  <main>
    <title>muldyr.no</title>
    <h1>www.muldyr.no</h1>
    <Img fixed={data.file.childImageSharp.fixed} />
    <p>
      Niels Simonsen
      <br />
      Sydlandsk bjerglandskab med ryttere på muldyr
    </p>
    <p className='small'>
      Inspirert av{' '}
      <a href='http://www.elg.no' target='_blank' rel='noreferrer'>
        elg.no
      </a>
    </p>
  </main>
);

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "muldyr.png" }) {
      childImageSharp {
        fixed(width: 292, height: 254) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
