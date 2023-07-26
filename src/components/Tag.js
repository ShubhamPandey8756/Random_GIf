import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinnerr from './Spinnerr';
import useGif from '../hook/useGif';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {
    const[tag,setTag]=useState('car');
    const{gif,loading,fecthData}=useGif(tag);
  return (
    <div className="w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
        <h1 className="text-2xl underline uppercase font-bold mt-[15px]">Random {tag} Gif</h1>
        {
            loading ?(<Spinnerr/>):(<img src={gif} width="450" alt="not found"/>)
        }
         <input
           className='w-10/12 text-lg py-2 rounded-lg text-center  mb-[3px]'
           onChange={(event)=>setTag(event.target.value)}
           value={tag}
        />
        <button className="w-10/12 bg-slate-900 text-lg py-2 rounded-lg text-white mb-[20px]"onClick={()=>fecthData(tag)}>
            Generate
        </button>
        
    </div>
  )
}

export default Tag