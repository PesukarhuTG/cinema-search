import { getVideo } from './services.js';

const listCard = document.querySelector('.other-films__list');

const renderCards = (data, type) => {
    listCard.textContent = '';

    Promise.all(data.map(async (item) => {

        const mediaType = item.media_type ? item.media_type : type;
        const trailer = await getVideo(item.id, mediaType);

        const card = document.createElement('li');
        card.className = 'other-films__item';

        const link = document.createElement('a');
        link.className = 'other-films__link tube';
        link.dataset.rating = item.vote_average ? item.vote_average : '—';
        if (trailer.results[0]) {
            link.href = `https://youtu.be/${trailer.results[0].key}`
        }

        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `постер ${item.title || item.name}`;
        img.src = item.poster_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` : './img/no-poster.jpg';

        link.append(img);
        card.append(link);

        return card;
    })
    ).then(cards => listCard.append(...cards));
};

export default renderCards;