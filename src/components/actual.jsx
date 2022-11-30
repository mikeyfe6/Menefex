import React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  actualContainer,
  actualText,
  actualImg,
  actualWrapper,
} from '../styles/modules/actual.module.scss';

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
    <div className={actualContainer}>
      <div className={actualWrapper}>
        <div className={actualImg}>
          <GatsbyImage
            image={frontImage}
            alt={data.contentfulBlogPost.image.title}
            style={{ borderRadius: '5px' }}
          />
        </div>
        <div className={actualText}>
          <h4 style={{ textAlign: 'center' }}>
            {data.contentfulBlogPost.title}
          </h4>
          <p style={{ textAlign: 'center' }}>
            {data.contentfulBlogPost.subtitle}{' '}
            <Link to={`/blog/${data.contentfulBlogPost.slug}/`}>
              <b>Lees meer...</b>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Actual;
