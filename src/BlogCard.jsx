// BlogCard.jsx
import React from 'react';
import marker from "./assets/Marker.png";
import comment from "./assets/Communication.png"
import star from "./assets/Star.png"

const BlogCard = ({ image }) => {
  return (
    <div className="rounded-3xl overflow-hidden shadow-lg place-items-center mx-auto">
      <div>
        <img src={image} alt="Blog" />
      </div>
      <div>
        <p>January 15, 2019 - Travel Tips</p>
      </div>
      <div className="bg-[#0336FF]">
        <h2 className="text-white font-bold">Going to the Extreme - The Northern Pole</h2>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-3">
        <div>
          <img src={marker} alt="Location" className="inline w-[30px] h-[30px]" /> North Pole
        </div>
        <div className="text-[15px]">
          <img src={comment} alt="Comment" className="inline w-[20px] h-[20px]" /> 12 Comments
        </div>
        <div>
          <img src={star} alt="Rating" className="inline w-[25px] h-[25px]" /> 4.8 of 5
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
