export const BASE_URL = `https://hiring.oraculi.io/v1`;

export const get = (url: string) =>
  fetch(`${BASE_URL}${url}`).then((res) => res.json());
