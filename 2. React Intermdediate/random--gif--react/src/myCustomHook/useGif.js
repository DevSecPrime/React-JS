// import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


function useGif(tag) {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);


    //fetching the api data from the api

    async function fetchData(tag) {
        setLoading(true)
        //const output = await axios.get(url); //we used axios to get the data from the api ---> applied get request on it

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageData = data.data.images.downsized_large.url;
        console.log(`Image Url: ${imageData}`); //to show in console
        setGif(imageData); //to show on UI

        setLoading(false)

    }

    useEffect(() => {
        fetchData();
    }, [])


    return { gif, loading, fetchData }


}

export default useGif
