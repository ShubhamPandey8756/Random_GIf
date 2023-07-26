import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinnerr from './Spinnerr';
import useGif from '../hook/useGif';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {
    const{gif,loading,fecthData}=useGif()
 
  return (
    <div className="w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
        <h1 className="text-2xl underline uppercase font-bold mt-[15px]"> A Random Gif</h1>
        {
            loading ?(<Spinnerr/>):(<img src={gif} width="450" alt="not found"/>)
        }
        
        <button className="w-10/12 bg-slate-900 text-lg py-2 rounded-lg text-white mb-[20px]"onClick={()=>{fecthData()}}>
            Generate
        </button>
        
    </div>
  )
}

export default Random