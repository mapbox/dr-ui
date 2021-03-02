/**
 * A XHR-powered function that accepts your Segment event, sends it to the endpoint, and then forwards it to Segment.
 * Events will be sent to one of two Segment projects:
 * 1. mapbox (production) if your host is *.mapbox.com.
 * 2. mapbox-staging otherwise.
 *
 * @param {event} - A Segment event object
 * @param {webhook} - Object containing the production and staging webhooks {production: '<webhook url>', 'staging: '<webhook url>'}
 *
 */
export default function forwardEvent(event, webhook, callback) {
  callback = callback || function () {};

  // window and event must be present to make the proper request
  if (typeof window === 'undefined') return;
  if (!event) {
    throw new Error('event argument required');
  }
  // checks if the current page is on production or staging
  // then determines which webhook to post to
  const isProduction = /(^|\S+\.)mapbox\.com/.test(window.location.host);
  const url = isProduction ? webhook.production : webhook.staging;

  // builds the xhr request to post the Segment event to the webhook
  const xhr = new XMLHttpRequest();
  if (url) {
    xhr.open('POST', url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onerror = handleError;
    xhr.onload = handleLoad;
    xhr.send(JSON.stringify(event));
  } else {
    handleError('forward-event missing POST url');
  }

  // handles posting the Segment event to the webhook URL
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

  // handles xhr error
  function handleError(error) {
    callback(error);
  }
}
