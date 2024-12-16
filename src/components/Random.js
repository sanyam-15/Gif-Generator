import React from 'react';
// import { useState,useEffect } from 'react';
// import axios from 'axios';
import Spinner from './Spinner'
import useGif from '../hooks/useGif'
import './Tag.css'

const Random = () => {
    // const[loading,setloading]=useState(false);
    // const [imagelink,setimagelink]=useState("");
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=G0O7qPVRarwOkObbOsP9VNr0NnqnPCmI`;

    // async function getdata(){
    //     setloading(true);
    //     const output=await axios.get(url)
    //     // output.data se object access hota hai uske baad uske andar data(name) wale object ko access krna hai ->images->downsized->url 
    //     const imagelink= output.data.data.images.downsized.url; 
    //     setimagelink(imagelink);
    //     setloading(false);
    // }

    // useEffect(()=>{
    //     getdata();
    // },[])


    const{loading,imagelink,getdata}=useGif();
   
  return (
    <div>
      <h3 className="title">A RANDOM GIF</h3>
      {loading?(<Spinner></Spinner>):(<img src={imagelink} alt='GIF'></img>)}
      <br></br>
      <button className='button' onClick={()=>getdata()}>GENERATE</button>
    </div>
  );
};

export default Random;