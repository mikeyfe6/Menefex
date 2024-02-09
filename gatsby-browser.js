import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

export function onServiceWorkerUpdateReady() {
  window.location.reload();
}

export function wrapRootElement({ element }) {
  return (
    <ContentfulLivePreviewProvider locale="nl-NL">
      {element}
    </ContentfulLivePreviewProvider>
  );
}
