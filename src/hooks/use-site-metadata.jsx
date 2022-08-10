import { graphql, useStaticQuery } from 'gatsby';

// Gemaakt om te kunnen gebruiken, global sitemetadata

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
