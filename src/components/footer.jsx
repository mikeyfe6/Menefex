import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from '../styles/modules/footer.module.scss';

// TODO: footer copryrights in het midden zetten

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
        <div className={footerStyles.collab}>
          <div className="row">
            <div className="col-lg-12">
              <p className="wow fadeInUp">
                <i>
                  &quot;to live a creative life, we must lose our fear of being
                  wrong&quot;
                </i>{' '}
                - <b>Joseph Chilton Pearce</b>
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className={footerStyles.hr}>
          <div className="row" />
        </div>

        <br />
        <br />
        <br />

        <div className={footerStyles.info}>
          <div className="row">
            <div className="col-lg-4" id={footerStyles.personal}>
              <p className="wow fadeInUp">connect with us</p>
              <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                <a href="mailto:contact@gimmix.nl">contact@gimmix.nl</a>
              </h4>
            </div>

            <div className="col-lg-4" id={footerStyles.media}>
              <p className="wow fadeInUp" data-wow-delay="2s">
                follow us on
              </p>

              <ul>
                <li
                  id={footerStyles.fb}
                  className="wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <a
                    href="https://www.facebook.com/MikeyFE"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    fb
                  </a>
                </li>
                <li
                  id={footerStyles.ig}
                  className="wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <a
                    href="https://www.instagram.com/mikeyfe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ig
                  </a>
                </li>
                <li
                  id={footerStyles.tw}
                  className="wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <a
                    href="https://www.twitter.com/mikeyfe"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    tw
                  </a>
                </li>
                <li
                  id={footerStyles.li}
                  className="wow fadeInUp"
                  data-wow-delay="1.0s"
                >
                  <a
                    href="https://www.linkedin.com/in/michaelfransman"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    li
                  </a>
                </li>
                <li
                  id={footerStyles.gh}
                  className="wow fadeInUp"
                  data-wow-delay="1.0s"
                >
                  <a
                    href="https://github.com/mikeyfe6"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    gh
                  </a>
                </li>
              </ul>

              <br />
              <br />
            </div>

            <div className="col-lg-4" id={footerStyles.address}>
              <p className="wow fadeInUp" data-wow-delay="0s">
                straight from
              </p>
              <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                <span className={footerStyles.amsterdam}>xxx</span> amsterdam
              </h4>
              <div className="whitespace" />
            </div>
          </div>
        </div>
        <p className={footerStyles.termscods}>
          terms & conditions | Gimmix LLC. 2019 &copy; | all rights reserved
        </p>
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
