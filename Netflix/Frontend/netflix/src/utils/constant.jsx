export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODQxZTA4MWNlZDMxYjllY2Q3Yjk4ZmIwOTg3ZjIwNCIsIm5iZiI6MTczMTUwMTEzNy45MDgyNjY1LCJzdWIiOiI2NzM0OTdjODMwZWUxMGFhMWI5YjNiYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SsmUoo_aoGSnnAdmsJeRMe6qwss-DAt0TvUAukUABAY'
    }
  };

export const Now_Playing_API = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const Popular_Movie_API = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie_API = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie_API = "https://api.themoviedb.org/3/movie/upcoming";

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_url = "https://image.tmdb.org/t/p/w500";