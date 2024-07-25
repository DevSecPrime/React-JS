import React from 'react'
import Spinner from './Spinner';
import useGif from '../myCustomHook/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);


    // //fetching the api data from the api

    // async function fetchData() {
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    //     //const output = await axios.get(url); //we used axios to get the data from the api ---> applied get request on it

    //     const { data } = await axios.get(url);
    //     const imageData = data.data.images.downsized_large.url;
    //     console.log(`Image Url: ${imageData}`); //to show in console
    //     setGif(imageData); //to show on UI

    //     setLoading(false)

    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const { gif, loading, fetchData } = useGif();

    // function clickHandler() {
    //     fetchData();
    // }
    return (
        <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px] underline rounded-lg text-center text-2xl font-bold uppercase'>A Random GIFs</h1>

            {/* <img src={gif} width="450" height={"500"} alt="random gif" loading='lazy' /> */}

            {
                loading ?
                    (<Spinner />) :
                    (<img src={gif} style={{width: "450px", height: "350px"}} alt="random gif" loading='lazy' />)
            }


            <button
                className='w-1/2 h-10 bg-white rounded-lg border border-black text-lg py-2 mb-[20px]'
                // onClick={clickHandler}>
                onClick={() => { fetchData() }}>
                Generate
            </button>
        </div>
    )
}

export default Random
