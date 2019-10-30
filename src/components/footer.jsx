import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';

import '../styles/footer.scss';

// TODO: https://www.youtube.com/watch?v=z9gMLjoMTik for footer adjustments

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //         author
  //       }
  //     }
  //   }
  // `);

  // const today = new Date();

  return (
    <footer>
      <div className="container">
        <br />
        <br />
        <div className="collab">
          <div className="row">
            <div className="col-lg-12">
              <p className="wow fadeInUp">
                Eindelijk weer een Paragraph waar ik overzicht heb..
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className="hr">
          <div className="row" />
        </div>

        <br />
        <br />

        <div className="info">
          <div className="row">
            <div className="col-lg-4" id="personal">
              <p className="wow fadeInUp">connect with me</p>
              <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                ig @mikeyfe6
              </h4>
            </div>

            <div className="col-lg-4" id="media">
              <p className="wow fadeInUp" data-wow-delay="2s">
                follow me
              </p>

              <ul>
                <li id="fb" className="wow fadeInUp" data-wow-delay="0.4s">
                  fb
                </li>
                <li id="ig" className="wow fadeInUp" data-wow-delay="0.6s">
                  ig
                </li>
                <li id="tw" className="wow fadeInUp" data-wow-delay="0.8s">
                  tw
                </li>
                <li id="yt" className="wow fadeInUp" data-wow-delay="1.0s">
                  yt
                </li>
              </ul>

              <br />
              <br />
            </div>

            <div className="col-lg-4" id="address">
              <p className="wow fadeInUp" data-wow-delay="0s">
                say hello
              </p>
              <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                mikeyfe6@gimmix.nl
              </h4>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* <footer className={footerDesign.footer}>
      <p>
        Created by <span>{data.site.siteMetadata.author}</span> also known as
        Mr. <span>{data.site.siteMetadata.title}</span> {today.getFullYear()} ©
      </p>
    </footer> */
