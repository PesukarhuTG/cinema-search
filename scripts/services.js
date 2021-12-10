const API_KEY = '382ab592fd481e7e012dce3baf64088e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANG = '&language=ru-RU';

const getData = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `Something wrong: ${response.status}`
    })
    .catch(err => console.error(err));

export const getTrends = async (type = 'all', period = 'week', page = 2) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`;
    return await getData(url);
}

export const getTop = async (type, page = 2) => {
    const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANG}&page=${page}`;
    return await getData(url);
}

export const getPopular = async (type, page = 2) => {
    const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANG}&page=${page}`;
    return await getData(url);
}

export const getVideo = async (id, type) => {
    const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANG}`;
    return await getData(url);
}