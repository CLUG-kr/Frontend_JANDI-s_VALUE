import { GA_TRACE_ID } from 'utils/constants';

export function gtag() {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

export function initGA() {
  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('config', GA_TRACE_ID, {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: window.document.title,
  });
}
