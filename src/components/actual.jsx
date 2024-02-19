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
        topics {
          name
          bdcolor
          slug
        }
        image {
          title
          gatsbyImageData(
            width: 550
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
          <Link to={`/blog/${data.contentfulBlogPost.slug}/`}>
            <GatsbyImage
              image={frontImage}
              alt={data.contentfulBlogPost.image.title}
              style={{ borderRadius: '5px' }}
            />
          </Link>
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
          <br />
          <ul>
            {data.contentfulBlogPost.topics.map((topic) => (
              <li key={topic.slug}>
                <Link
                  to={`/topics/${topic.slug}/`}
                  style={{
                    borderColor: topic.bdcolor,
                  }}
                >
                  {topic.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Actual;
