import * as React from 'react';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>404</title>
      <h1 style={headingStyles}>Her var det tomt</h1>
    </main>
  );
};

export default NotFoundPage;
