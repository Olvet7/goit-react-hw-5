import axios from "axios";
// const key = '1b39c9503f1ea31c3614c06b7303b19f';
// Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjM5Yzk1MDNmMWVhMzFjMzYxNGMwNmI3MzAzYjE5ZiIsInN1YiI6IjY1ZjMxMDI2ZDY0YWMyMDE0YjVlMDU4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gxI21QOU-OLQZN-YNw0shlq5SDSb5A47qIr9uBSyOhA'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: '1b39c9503f1ea31c3614c06b7303b19f',
        language: "en-US"
    },
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjM5Yzk1MDNmMWVhMzFjMzYxNGMwNmI3MzAzYjE5ZiIsInN1YiI6IjY1ZjMxMDI2ZDY0YWMyMDE0YjVlMDU4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gxI21QOU-OLQZN-YNw0shlq5SDSb5A47qIr9uBSyOhA'
    }
})

export const getTrendingMovieList = async () => {
    const response = await instance.get("trending/movie/day");
    return response.data.results  
}

export const getDetailsFromId = async (movieId) => {
    const response = await instance.get(`/movie/${movieId}`);
    return response.data  
}

export const getCastFromMovie = async (movieId) => {
    const response = await instance.get(`/movie/${movieId}/credits`)
    return response.data.cast;
}

export const getReviewsFromMovie = async (movieId) => {
    const response = await instance.get(`/movie/${movieId}/reviews`)
    return response.data.results;
}

export const getSearchedMovie = async (queryParam) => {
    const response = await instance.get(`/search/movie?query=${queryParam}`)
    return response.data.results;
}