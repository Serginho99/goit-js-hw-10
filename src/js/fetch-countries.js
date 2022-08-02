const BASE_URL = `https://restcountries.com/v2`;
const FILTER_RESPONSE = `name,capital,flags,languages,population`;
export function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}?fields=${FILTER_RESPONSE}`).then(
    resolve => {
      if (!resolve.ok) {
        throw new Error(resolve.status);
      }
      return resolve.json();
    }
  );
}
