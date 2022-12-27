import React, { useEffect } from 'react'
import axios from 'axios';

function Test() {

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: 'music',
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '656d127d5amshbeef79a8b5ba549p14b883jsndd044fb04777',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
        
  
  return (
    
    <div>Test</div>
  )
}

export default Test