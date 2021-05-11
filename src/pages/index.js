import React from 'react';
import Banner from '../components/banner';
import Layout from '../components/layoutWithNoContainer';

const Index = () => (
  <Layout>
    <Banner />

    <div className="home-sections">
      <section className="d-flex s-odd">
        <div style={{ flex: "0 0 50%", paddingLeft: "8%", paddingRight: "3%" }}>
          <div className="section-number">01</div>
          <div>
            <div className="section-title-top">Design consultant</div>
            <div className="section-title-bottom">web superhero</div>
          </div>
          <div className="section-description">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
        </div>
        <div style={{ flex: "0 0 50%", paddingLeft: "3%" }}>
          <img src="/images/about-1.jpg" alt="about-1" style={{ width: "100%" }} />
        </div>
      </section>
      <section className="d-flex s-even">
        <div style={{ flex: "0 0 50%", paddingRight: "3%" }}>
          <img src="/images/about-2.jpg" alt="about-1" style={{ width: "100%" }} />
        </div>
        <div style={{ flex: "0 0 50%", paddingLeft: "3%", paddingRight: "8%" }}>
          <div className="section-number">02</div>
          <div>
            <div className="section-title-top">Co-founder of the</div>
            <div className="section-title-bottom">Apple Insider</div>
          </div>
          <div className="section-description">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          </div>
        </div>
      </section>
      <section className="d-flex s-odd">
        <div style={{ flex: "0 0 50%", paddingLeft: "8%", paddingRight: "3%" }}>
          <div className="section-number">03</div>
          <div>
            <div className="section-title-top">Get in touch</div>
          </div>
          <div className="section-description">
            <p>Contact us with any questions or comments.</p>
          </div>
        </div>
        <div style={{ flex: "0 0 50%", paddingLeft: "3%" }} className="contact-block">
          <div>
            <div className="contact-method">E-MAIL</div>
            <div className="contact-detail">hi@myguesstrading.com</div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Index;

