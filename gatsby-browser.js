export function onClientEntry() {
  document.querySelector('body').style.display = 'none';
  console.log('Gimmix is aan het laden...');
}

export function onInitialClientRender() {
  document.querySelector('body').style.display = 'block';

  console.log('Welkom bij Gimmix Webmediabedrijf !');
}

export function onServiceWorkerUpdateReady() {
  window.location.reload();
  console.log('Gimmix is geupdated !');
}
