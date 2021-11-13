import * as React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: 'Documentation',
  url: 'https://www.gatsbyjs.com/docs/',
  color: '#8954A8',
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>muldyr.no</title>
      <h1 style={headingStyles}>
        Velkommen
        <br />
        <span style={headingAccentStyles}>— muldyr.no </span>
      </h1>
    </main>
  );
};

export default IndexPage;
