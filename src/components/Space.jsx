import { useState } from "react"
import SpaceSettings from "./settings/spaceSetting.jsx"
import {Link} from 'react-router-dom'
const Space = () => {   
    const [spaceName, setSpaceName] = useState("Aman Website")
    const [imageURL, setImageURL] = useState("")
    const [videoCount, setVideoCount] = useState(0);
    const [textCount, setTextCount] = useState(0);

  return (
    <div className="grid grid-cols-9 items-center justify-center rounded-lg border border-slate-500 w-fit h-24 bg-black bg-opacity-20 
     hover:bg-gray-900 cursor-pointer transition">
      <img className='col-span-2 w-20' src='image.png' alt="SpLogo" />
      <div className="flex flex-col px-5 col-span-6">
        <p className="px-5">{spaceName}</p>
        <div>
        <span className="px-5">Video: {videoCount}</span>
        <span>Text: {textCount}</span>
        </div>
    </div>
        <SpaceSettings/>
    </div>
  )
}

export default Space
