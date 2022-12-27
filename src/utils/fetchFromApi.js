import axios from 'axios';

const Base_Url = 'https://youtube-v31.p.rapidapi.com';


const options = {
    params: {
      maxResults: '50',
     
    },
    headers: {
      'X-RapidAPI-Key': 'aa8d10e317msh12cfc0db7448bc6p15a344jsn72afa862c481',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async (url)=>{
    const {data} = await axios.get(`${Base_Url}/${url}`, options)

    return data;
  }