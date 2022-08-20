const React = require('react');

const HtmlAttributes = {
  lang: 'nl',
};

const HeadComponents = [
  <link
    key="mnfxAnimate"
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
  />,
  <link
    key="mnfxRss"
    rel="alternate"
    type="application/rss+xml"
    title="Menefex WMB: RSS Feeds"
    href="https://menefex.nl/rss.xml"
  />,
  <script key="mnfxDefer" defer={false} />,
];

const BodyAttributes = {
  // 'data-theme': 'dark',
};

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
  setBodyAttributes(BodyAttributes);
};

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    if (x.key === 'mnfxAnimate') {
      return -1;
    }
    if (y.key === 'mnfxAnimate') {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};
