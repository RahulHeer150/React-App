import React from 'react'
import { useState } from 'react'

const Postcard = ({props}) => {
    const[likes,setlikes] = useState(0);
    const[liked,setliked] = useState(false);
    const handleLike = () => {
        setliked(!liked);
        setlikes((prev)=> (liked ? prev - 1 : prev + 1));
    };
  return (
    <div className='bg-white rounded-xl shadow-md p-6 w-80 text-center'>
         <img
        className="w-full h-48 object-cover"
        src={props.imgPath}
        alt="card-img"
      />
        <h2 className='text-xl font-bold text-grey-800 mb-2'>{props.title}</h2>
        <p className='text-gray-600'>{props.description}</p>
        <button onclick={handleLike} className={`px-4 py-2 rounded-full text-white ${liked ? "bg-red-500":"bg-blue-500"}`}>
            {liked ? "unlike":"like"}({likes}) </button>

    </div>
  )
}

export default Postcard ;