// import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const useGif = (tag) => {
    const[loading,setloading]=useState(false);
    const [imagelink,setimagelink]=useState('');
    const url1 = `https://api.giphy.com/v1/gifs/random?api_key=G0O7qPVRarwOkObbOsP9VNr0NnqnPCmI`;
    const url2 = `https://api.giphy.com/v1/gifs/random?api_key=G0O7qPVRarwOkObbOsP9VNr0NnqnPCmI&tag=${tag}`;

    async function getdata(tag){
        setloading(true);
        const output=await axios.get(tag ? url2:url1)
        const imagelink = output.data.data.images.downsized.url; 
        setimagelink(imagelink);
        setloading(false);
    }

    useEffect(()=>{
        getdata('Lion');
    },[])
   
    return {loading,imagelink,getdata};
};

export default useGif;