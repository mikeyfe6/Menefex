import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerDesign from '../styles/modules/footer.module.scss';

// TODO: https://www.youtube.com/watch?v=z9gMLjoMTik for footer adjustments

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  const today = new Date();

  return (
    <footer className={footerDesign.footer}>
      <p>
        Created by <span>{data.site.siteMetadata.author}</span> also known as
        Mr. <span>{data.site.siteMetadata.title}</span> {today.getFullYear()} ©
      </p>
    </footer>
  );
};

export default Footer;
