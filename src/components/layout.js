import React from 'react';
import Head from './head';
import Header from './header';
import Footer from './footer';
import '../styles/global.css';

const LayoutMdx = props => {
  return (
    <>
      <Head {...props} />
      <Header />
      <main id="content">
        <div className="container mt-4 mb-4">
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LayoutMdx;
