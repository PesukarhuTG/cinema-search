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
                if (data.results.length) {
                    filmsTitle.style.fontSize = '';
                    renderCards(data.results);
                } else {
                    throw 'Ooops, по вашему запросу ничего не найдено'
                }
            })
            .then(() => {
                filmWeek.remove();
                filmsTitle.textContent = 'Результат поиска'
            })
            .catch(err => {
                filmWeek.remove();
                filmsTitle.style.fontSize = '35px';
                filmsTitle.textContent = err;
            })
    })
}

export default search;