import React from 'react';
import Head from './head';

const Layout = props => {
  return (
    <>
      <Head {...props} />
      <main id="content">
        {props.children}
      </main>
    </>
  );
};

export default Layout;
