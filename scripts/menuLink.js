import { getPopular, getTop, getTrends } from './services.js';
import renderCards from './renderCards.js';

const filmsTitle = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');

const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', e => {
            filmsTitle.style.fontSize = '';
            const target = e.target.closest('.get-nav__link');

            if (target) {
                e.preventDefault();
                filmWeek.style.display = 'none';
                filmsTitle.textContent = target.textContent;

                //trends
                if (target.classList.contains('get-nav__link_triends')) {
                    getTrends()
                        .then(data => renderCards(data.results))
                }

                //popular movies
                if (target.classList.contains('get-nav__link_popular-movies')) {
                    getPopular('movie')
                        .then(data => renderCards(data.results, 'movie'))
                }

                //popular serials
                if (target.classList.contains('get-nav__link_popular-tv')) {
                    getPopular('tv')
                        .then(data => renderCards(data.results, 'tv'))
                }

                //TOP movies
                if (target.classList.contains('get-nav__link_top-movies')) {
                    getTop('movie')
                        .then(data => renderCards(data.results, 'movie'))
                }

                //TOP serials
                if (target.classList.contains('get-nav__link_top-tv')) {
                    getTop('tv')
                        .then(data => renderCards(data.results, 'tv'))
                }
            }
        })
    })
}

export default menuLink;