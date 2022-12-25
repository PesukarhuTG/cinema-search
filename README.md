# ONLINE CINEMA 
The study project is based on TMDB API via Fetch.

*
*
*

<h2 align="center">UPD 2022: unfortunately, <a href="https://pesukarhutg.github.io/cinema-search/" target="_blank">Deploy link</a> does not work due to restrictions for Russian users</h2>

*
*
*


Task 1: Create a burger menu ======================================

![burger menu gif](https://github.com/PesukarhuTG/cinema-search/blob/master/preview/gif-burger-menu.gif)

Task 2: Get TRENDS ================================================

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
    
Task 3: Get POPULAR and TOP movies/tv shows =======================

![movie cards](https://github.com/PesukarhuTG/cinema-search/blob/master/preview/gif-link-navmenu.gif)



**Create requests to get data from [API TMDB](https://www.themoviedb.org/)** <br/>
    export const getTop = async (type, page = 1) => {
       const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANG}&page=${page}`;
       return await getData(url);
    };
    
    export const getPopular = async (type, page = 1) => {
       const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANG}&page=${page}`;
       return await getData(url);
    };

Task 4: Get VIDEO TRAILERS ======================================

**Create a request to get data from [API TMDB](https://www.themoviedb.org/)** <br/>
    export const getVideo = async (id, type) => {
        const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANG}`;
        return await getData(url);
    };

**Get last trailer for the Main picture and rending at the page:** <br/>
    const renderVideo = async () => {
        /.../
        const firstCardVideo = await getVideo(firstCard.id, firstCard.media_type);
        firstRender(firstCard, firstCardVideo.results[0].key);
    };
    
**Get trailers for movie cards and rending at the page** <br/>
For example, Popular movies:<br>
    
    //Click nav menu
    if (target.classList.contains('get-nav__link_popular-movies')) {
        getPopular('movie')
            .then(data => renderCards(data.results, 'movie'))
    }
    
    //Rendering
    const renderCards = (data, type) => {
        /.../
    Promise.all(data.map(async (item) => {
        const mediaType = item.media_type ? item.media_type : type;
        const trailer = await getVideo(item.id, mediaType);
        /.../
    })
    ).then(cards => listCard.append(...cards));
    };
   
Task 5: Create SEARCH ======================================

**Create a request to get data from [API TMDB](https://www.themoviedb.org/)** <br/>
    export const search = async (query, page) => {
        const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANG}&page=${page}&include_adult=false&query=${query}`;
        return await getData(url);
    };
    
**Search reques** <br/>
    const search* = () => {
        searchForm.addEventListener('submit', e => {
            e.preventDefault();
            if (!searchInput.value) return;
            
            search(searchInput.value)
                .then(data => {
                   if (data.results.length) {
                   renderCards(data.results);
                 } else {
                   throw 'Ooops, по вашему запросу ничего не найдено'
                 }
             })
            .then(() => {
                /.../
            })
            .catch(err => {
                /.../
            })
        })}
    
