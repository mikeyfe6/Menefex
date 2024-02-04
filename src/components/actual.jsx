import React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as actualStyles from '../styles/modules/actual.module.scss';

const Actual = () => {
  const data = useStaticQuery(graphql`
    query ActualQuery {
      contentfulBlogPost {
        subtitle
        title
        slug
        publishedDate
        image {
          title
          gatsbyImageData(
            width: 625
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const frontImage = getImage(data.contentfulBlogPost.image);

  return (
    <section className={actualStyles.actualContainer}>
      <div className={actualStyles.actualWrapper}>
        <div>
          <GatsbyImage
            image={frontImage}
            alt={data.contentfulBlogPost.image.title}
            style={{ borderRadius: '5px' }}
          />
        </div>
        <div className={actualStyles.actualText}>
          <h4>{data.contentfulBlogPost.title}</h4>
          <br />
          <p>
            {data.contentfulBlogPost.subtitle}{' '}
            <Link to={`/blog/${data.contentfulBlogPost.slug}/`}>
              <b>Lees meer...</b>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Actual;
