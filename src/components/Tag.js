import React from 'react';
import { useState } from 'react';
// import axios from 'axios';
import Spinner from './Spinner'
import useGif from '../hooks/useGif'
import './Tag.css';


const Tag = () => {

    const[tag,setTag]=useState('Lion');
    // const[loading,setloading]=useState(false);
    // const [imagelink,setimagelink]=useState("");
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=G0O7qPVRarwOkObbOsP9VNr0NnqnPCmI&tag=${tag}`;

    // async function getdata(){
    //     setloading(true);
    //     const output=await axios.get(url)
    //     const imagelink= output.data.data.images.downsized.url; 
    //     setimagelink(imagelink);
    //     setloading(false);
    // }

    // useEffect(()=>{
    //     getdata();
    // },[])

    const{loading,imagelink,getdata}=useGif(tag);
   
  return (
    <div>
      <h3 className="title">RANDOM {tag} GIF</h3>
      {loading?(<Spinner></Spinner>):(<img src={imagelink} alt='GIF'></img>)}
      <br></br>
      <input className="input-box" type='text' value={tag} onChange={(e)=>setTag(e.target.value)}></input>
      <br></br>
      <button className='button' onClick={()=>getdata(tag)}>GENERATE</button>
    </div>
  );
};

export default Tag;