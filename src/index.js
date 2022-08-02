import './css/styles.css';
import { fetchCountries } from './js/fetch-countries';
import { createCardRef } from './js/markup-card';
import { generateContentList } from './js/markup-list';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const listRef = document.querySelector('.country-list');
const cardRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onEventInput, DEBOUNCE_DELAY));

function onEventInput(e) {
  e.preventDefault();
  removeInput();
  const user = e.target.value.trim();
  fetchCountries(user)
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length < 10) {
        listRef.innerHTML = generateContentList(data);
      }
      if (data.length === 1) {
        listRef.innerHTML = '';
        cardRef.innerHTML = createCardRef(data[0]);
      }
    })
    .catch(onError);
}

function removeInput() {
  listRef.innerHTML = '';
  cardRef.innerHTML = '';
}

function onError(error) {
  Notify.failure('Oops, there is no country with that name');
}
