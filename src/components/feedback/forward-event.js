export default function forwardEvent(event, webhook, callback) {
  callback = callback || function() {};

  if (typeof window === 'undefined') return;
  if (!event) {
    throw new Error('event argument required');
  }

  const isProduction = /(^|\S+\.)mapbox\.com/.test(window.location.host);
  const url = isProduction ? webhook.production : webhook.staging;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onerror = handleError;
  xhr.onload = handleLoad;
  xhr.send(JSON.stringify(event));

  function handleLoad() {
    if (xhr.status === 200) {
      callback();
      return;
    }

    let message;
    try {
      const response = JSON.parse(xhr.response);
      message = response.message;
    } catch (parseError) {
      message = xhr.response;
    }

    const error = new Error('[' + xhr.status + ' HTTP error] ' + message);
    error.statusCode = xhr.status;
    error.response = xhr.response;
    handleError(error);
  }

  function handleError(error) {
    callback(error);
  }
}
