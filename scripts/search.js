import { search as searchGet } from "./services.js";
import renderCards from './renderCards.js';

const filmsTitle = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const searchForm = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');

const search = () => {
    searchForm.addEventListener('submit', e => {
        e.preventDefault();

        if (!searchInput.value) return;

        searchGet(searchInput.value)
            .then(data => {
                if (data.results.length) { //check 'are there elements?'
                    renderCards(data.results);
                } else {
                    throw 'К сожалению, по вашему запросу ничего не найдено'
                }
            })
            .then(() => {
                filmWeek.remove(); //delete from a page
                filmsTitle.textContent = 'Результат поиска'
            })
            .catch(err => {
                filmsTitle.textContent = err;
                console.error('Unfortunately, your request did not match any results');
            })
    })


}

export default search;