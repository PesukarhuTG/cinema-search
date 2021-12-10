import { getTrends, getVideo } from './services.js';
import renderCards from './renderCards.js';

const filmWeek = document.querySelector('.film-week');

const firstRender = ({ original_name, original_title, name, title, vote_average, backdrop_path }, key) => {

    filmWeek.innerHTML = `
        <div class="container film-week__container" data-rating="${vote_average}">
            <div class="film-week__poster-wrapper">
                <img class="film-week__poster"
                    src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}"
                    alt="постер ${name || title}">
                    <p class="film-week__title_origin">${original_name || original_title}</p>
            </div>
            <h2 class="film-week__title">${name || title}</h2>
            ${key ? (`<a class="film-week__watch-trailer tube" href="https://youtu.be/${key}" aria-label="смотреть трейлер"></a>`) : ''}
        </div>
    `;
}

const renderVideo = async () => {

    const data = await getTrends(); //get trends from DB
    const [firstCard, ...otherCards] = data.results; //from all trends choose first element + the rest of trends
    otherCards.length = 12; // full length is 19 items. We need 12
    renderCards(otherCards); //12 items are transfered to func

    const firstCardVideo = await getVideo(firstCard.id, firstCard.media_type); //get trailer for main picture from DB
    firstRender(firstCard, firstCardVideo.results[0].key); //first elem is transfered to func + last trailer's key
};

export default renderVideo;