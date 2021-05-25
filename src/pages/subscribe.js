import React from 'react';
import Layout from '../components/layout';

const Subscribe = () => {
  return (
    <Layout>
      <div>
        <div className="text-center"><h2>Pricing</h2></div>
        <div className="mt-4 text-center">
          <h4>the Plan that Scales your Business</h4>
          <p className="mt-4 text-grey">Sign up below to get our signals. Setup takes under 1 minute.</p>
          <div className="pricing-details text-center">
            <div className="card text-center" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title mb-4">Options Monthly</h5>
                <p className="card-text font-weight-light">Weekly emails with our options trading signals</p>
                <div className="pricing-number-wrap">
                  <span className="pricing-dollar">us$</span>
                  <span className="pricing-number">30</span>
                </div>
                <div className="pricing-bill-info">a month (billed monthly)</div>
                <button className="btn btn-main">Start Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Subscribe;