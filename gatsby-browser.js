export function onClientEntry() {
  document.querySelector('body').style.display = 'none';
  console.log('GXWMB: Gimmix is aan het laden...');
}

export function onInitialClientRender() {
  document.querySelector('body').style.display = 'block';

  console.log('GXWMB: Welkom bij Gimmix Webmediabedrijf !');
}

export function onServiceWorkerUpdateReady() {
  window.location.reload();
  console.log('GXWMB: Gimmix is geupdated !');
}
