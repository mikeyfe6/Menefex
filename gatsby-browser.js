// export function onServiceWorkerUpdateReady() {
//   window.location.reload();
//   // console.log('GXWMB: Gimmix is geupdated !');
// }

export function onClientEntry() {
  document.querySelector('body').style.display = 'none';
  // console.log('GXWMB: Aan het laden ...');
}

export function onInitialClientRender() {
  document.querySelector('body').style.display = 'block';
  // console.log('GXWMB: Welkom bij Gimmix Webmediabedrijf !');
}
