
//for create context api we are needed to follow the 3 important steps...
//step-1. create a context ----> dahi Bhalle k plate redy karo
//step-2. create a context provider ---> dahi Bhalle k plate banao masala,papdi,dahi
//step-3. use context               --> MOST IMPORTANT--> dahi Bhalle k plate use kro

import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext(); //step-1 --> create AppContext done!!

//here App.js is the children will have access to app context ----> provide data to childern (app.js)

//step-2. create a context provider ---> dahi Bhalle k plate banao masala,papdi,dahi
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1); //in starting it will be on first page...
    const [totalPages, setTotalPages] = useState(null); //null ---> bcs we dont know the total nums pages...


    //here , we are needed to fill the data...

    async function fetchBlogPostsData(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`; //api url --> to fetch data
        // console.log("url", url);
        try {
            const response = await fetch(url); //api call --> for fetch the data
            const data = await response.json();//converted data in json format
            console.log("data from api", data);
            setPosts(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
        }

        catch (error) {
            console.log("Error in fetching data....", error);
            setPosts([]);
            setPage(1);
            setTotalPages(null);
        }


        setLoading(false);//if data is fetched successfully fetched setLoading to false --> if not fetched it   will go to catch..and will throw an error 
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPostsData(page);
    }

    // passing the values with functions...
    const value = {

        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPostsData,
        handlePageChange

    };

    //step-2 :- provide context done
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

    //step-3 :- use context ---> via use context hook
}





