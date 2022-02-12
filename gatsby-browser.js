// bootstrap
require('bootstrap/dist/css/bootstrap.min.css');

exports.onServiceWorkerUpdateReady = () => {
  window.location.reload();
};
