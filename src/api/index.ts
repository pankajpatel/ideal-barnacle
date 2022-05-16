export const get = (url: string) => fetch(url).then((res) => res.json());

export const BASE_URL = `https://hiring.oraculi.io/v1`;
