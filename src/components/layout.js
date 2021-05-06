import React from 'react';
import Head from './head';
import Header from './header';
import '../styles/global.css';

const Layout = props => {
  return (
    <>
      <Head {...props} />
      <Header />
      <main id="content">
        {props.children}
      </main>
    </>
  );
};

export default Layout;
