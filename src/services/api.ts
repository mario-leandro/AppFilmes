import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "b406ace52f9a9e24e83ee38a48d7242f",
        language: "pt-BR",
        include_adult: false
    }
});