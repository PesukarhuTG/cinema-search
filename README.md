# ONLINE CINEMA 
The educational project is based on API TMDB via Fetch. [Preview link](https://pesukarhutg.github.io/cinema-search/)

### Task 1: Create a burger menu
![burger menu gif](https://github.com/PesukarhuTG/cinema-search/blob/master/preview/gif-burger-menu.gif)

### Task 2: Get data from server
Used [API TMDB](https://www.themoviedb.org/) 

    const API_KEY = '*****************************';
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
    
### Task 3: Generating movie cards by nav links clicking
Used [API TMDB](https://www.themoviedb.org/)<br>
![movie cards](https://github.com/PesukarhuTG/cinema-search/blob/master/preview/gif-link-navmenu.gif)
<br>**Additional task:** if movie rate equals '0', it shows '-' instead of '0'
