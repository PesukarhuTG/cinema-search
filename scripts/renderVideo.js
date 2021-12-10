import { getTrends, getVideo } from './services.js';
import renderCards from './renderCards.js';

const filmWeek = document.querySelector('.film-week');

const firstRender = ({ original_name, original_title, name, title, vote_average, backdrop_path }, { key }) => {

    filmWeek.innerHTML = `
        <div class="container film-week__container" data-rating="${vote_average}">
            <div class="film-week__poster-wrapper">
                <img class="film-week__poster"
                    src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}"
                    alt="постер ${name || title}">
                    <p class="film-week__title_origin">${original_name || original_title}</p>
            </div>
            <h2 class="film-week__title">${name || title}</h2>

            ${key ? `<a class="film-week__watch-trailer tube" href="https://youtu.be/${key}" aria-label="смотреть трейлер"></a>` : ''}
        </div>
    `;
}

const renderVideo = async () => {
    const data = await getTrends(); //get data from the server and save in prop

    const [firstCard, ...otherCards] = data.results; //from all data choose first element + the rest of data
    otherCards.length = 12; // full length is 19 items. We need 12

    const video = await getVideo(firstCard.id, firstCard.media_type);

    firstRender(firstCard, video.results[0]); //first elem is transfered to func + last trailer
    renderCards(otherCards); //12 items are transfered to func
};

export default renderVideo;