import React from 'react';
import Head from './head';
import Header from './header';
import Footer from './footer';
import '../styles/global.css';

const Layout = props => {
  return (
    <>
      <Head {...props} />
      <Header />
      <main id="content">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
