export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY 
    }
  };
//url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};
//const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/channel/about';

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();


    return data;
}