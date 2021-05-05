import React from 'react';
import Head from './head';
import '../styles/global.css';

const Layout = props => {
  return (
    <>
      <Head {...props} />
      <main id="content">
        <div className="container">
          {props.children}
        </div>
      </main>
    </>
  );
};

export default Layout;
