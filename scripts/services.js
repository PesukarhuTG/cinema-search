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

export const getTrends = async (type = 'all', period = 'week', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`;
    return await getData(url);
}