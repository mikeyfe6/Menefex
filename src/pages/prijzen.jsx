import React, { useRef } from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import useSiteMetadata from '../hooks/use-site-metadata';

import PriceTable from '../components/pricetable';
import Notes from '../components/notes';
import CallForm from '../components/callForm';

import * as pricesStyles from '../styles/modules/prices.module.scss';

const discountUntil = new Date('2024-05-30').toLocaleDateString('nl-NL', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
});

const dateReview = new Date('2024-01-01').toLocaleDateString('nl-NL', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
});

const Prices = () => {
  const callRef = useRef(null);

  const goToCallForm = (event) => {
    event.preventDefault();
    callRef.current.focus();
  };

  return (
    <Layout>
      <h1 className="page-title">
        Prijzen & tarieven<span>.</span>
      </h1>

      <p className="page-sub">
        Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een
        georiënteerd gesprek, neem{' '}
        <Link to="/contact/" className={pricesStyles.contactus}>
          contact
        </Link>{' '}
        met ons op of vraag een{' '}
        <button
          className={pricesStyles.callme}
          onClick={goToCallForm}
          tabIndex={0}
        >
          terugbelverzoek
        </button>{' '}
        aan.
      </p>

      <PriceTable />

      <div className="notes-call">
        <Notes />
        <CallForm callRef={callRef} />
      </div>
    </Layout>
  );
};

export default Prices;

export const Head = () => {
  const { title, siteUrl, priceImage } = useSiteMetadata();

  const breadcrumbSchema = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    '@id': siteUrl + '/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: title,
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Prijzen & tarieven',
        item: siteUrl + '/prijzen/',
      },
    ],
  };

  const budgetPlanSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': siteUrl + '/#budgetplan',
    name: 'Budget Plan',
    image: siteUrl + priceImage,
    description:
      'Het Budget Plan biedt een betaalbare oplossing voor kleine projecten met ontwikkeling van website, webapplicatie of webshop, inclusief SEO-optimalisatie en een maand gratis ondersteuning.',
    priceRange: '$$',
    brand: {
      '@type': 'Brand',
      name: title,
    },
    offers: {
      '@type': 'Offer',
      url: siteUrl + '/prijzen/',
      priceCurrency: 'EUR',
      price: '295.00',
      availability: 'https://schema.org/OnlineOnly',
      itemCondition: 'https://schema.org/NewCondition',
      priceValidUntil: discountUntil,
      hasMerchantReturnPolicy: false,

      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: 'Free',
        shippingDestination: {
          '@type': 'Country',
          name: 'Worldwide',
        },
      },
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '10',
    },

    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: 'Happy Customer',
      },
      datePublished: dateReview,
      reviewBody: 'Great product!',
    },
  };

  const starterPlanSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': siteUrl + '/#starterplan',
    name: 'Starter Plan',
    image: siteUrl + priceImage,
    description:
      "Het Starter Plan is ideaal voor groeiende bedrijven, met meer pagina's en functies, inclusief een blog en drie maanden gratis ondersteuning.",
    priceRange: '$$',
    brand: {
      '@type': 'Brand',
      name: title,
    },
    offers: {
      '@type': 'Offer',
      url: siteUrl + '/prijzen/',
      priceCurrency: 'EUR',
      price: '595.00',
      availability: 'https://schema.org/OnlineOnly',
      itemCondition: 'https://schema.org/NewCondition',
      priceValidUntil: discountUntil,
      hasMerchantReturnPolicy: false,

      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: 'Free',
        shippingDestination: {
          '@type': 'Country',
          name: 'Worldwide',
        },
      },
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '10',
    },

    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: 'Happy Customer',
      },
      datePublished: dateReview,
      reviewBody: 'Great product!',
    },
  };

  const establishedPlanSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': siteUrl + '/#establishedplan',
    name: 'Established Plan',
    image: siteUrl + priceImage,
    description:
      'Het Established Plan is geschikt voor gevestigde bedrijven, met een uitgebreider pakket aan diensten en zes maanden gratis ondersteuning.',
    priceRange: '$$$',
    brand: {
      '@type': 'Brand',
      name: title,
    },
    offers: {
      '@type': 'Offer',
      url: siteUrl + '/prijzen/',
      priceCurrency: 'EUR',
      price: '1025.00',
      availability: 'https://schema.org/OnlineOnly',
      itemCondition: 'https://schema.org/NewCondition',
      priceValidUntil: discountUntil,
      hasMerchantReturnPolicy: false,

      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: 'Free',
        shippingDestination: {
          '@type': 'Country',
          name: 'Worldwide',
        },
      },
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '10',
    },

    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: 'Happy Customer',
      },
      datePublished: dateReview,
      reviewBody: 'Great product!',
    },
  };

  const businessPlanSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': siteUrl + '/#businessplan',
    name: 'Business Plan',
    image: `${siteUrl}${priceImage}`,
    description:
      "Het Business Plan is ontworpen voor grote bedrijven of e-commerce, met onbeperkte pagina's, e-commercefunctionaliteit en een jaar gratis ondersteuning.",
    priceRange: '$$$',
    brand: {
      '@type': 'Brand',
      name: title,
    },
    offers: {
      '@type': 'Offer',
      url: siteUrl + '/prijzen/',
      priceCurrency: 'EUR',
      price: '1575.00',
      availability: 'https://schema.org/OnlineOnly',
      itemCondition: 'https://schema.org/NewCondition',
      priceValidUntil: discountUntil,
      hasMerchantReturnPolicy: false,

      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: 'Free',
        shippingDestination: {
          '@type': 'Country',
          name: 'Worldwide',
        },
      },
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '10',
    },

    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: 'Happy Customer',
      },
      datePublished: dateReview,
      reviewBody: 'Great product!',
    },
  };

  return (
    <SEO
      title="Prijzen & tarieven"
      description="Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een georiënteerd gesprek, neem contact met ons op of vraag een terugbelverzoek aan."
      keywords="prijzen, tarieven, budget plan, starter plan, established plan, business plan, actie, terugbelverzoek, prijslijst, pakket, offerte, bel mij terug, prices"
      pathname="/prijzen/"
      schemaMarkup={[
        breadcrumbSchema,
        budgetPlanSchema,
        starterPlanSchema,
        establishedPlanSchema,
        businessPlanSchema,
      ]}
    />
  );
};
