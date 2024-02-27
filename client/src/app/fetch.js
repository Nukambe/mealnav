import Cookies from 'js-cookie';

export default async function csrfFetch(url, options = {}) {
  options.method = options.method || 'GET';
  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] =
      options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN');
  }

  const res = await fetch(url, options);
  if (res.status >= 400) throw res;
  const data = await res.json();
  if (data.csrfToken) Cookies.set('XSRF-TOKEN', data.csrfToken);
  if (data.accessToken) Cookies.set('accessToken', data.accessToken);
  if (data.refreshToken) Cookies.set('refreshToken', data.refreshToken);

  return data;
}
