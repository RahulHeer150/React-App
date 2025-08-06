import React, { useState } from "react";

const PostCard = (props) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-80 text-center m-5">
        <img
            src={props.imgPath}
            alt="Postcard"
            className="w-full h-40 object-cover rounded-t-xl mb-4"/>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{props.title}</h2>
      <p className="text-gray-600 mb-4">{props.description}</p>
      <button
        onClick={handleLike}
        className={`px-4 py-2 rounded-full text-white ${
          liked ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {liked ? "Unlike" : "Like"} ({likes})
      </button>
    </div>
  );
};

export default PostCard;