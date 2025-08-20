import React from "react";
import { FaMapMarkerAlt, FaComment } from "react-icons/fa";

const TravelCard = ({ image, date, category, title, location, comments }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-70 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <p className="text-sm text-orange-500 font-semibold">
          {date} - {category}
        </p>
        <h2 className="text-lg font-bold mt-1">{title}</h2>
        <div className="flex items-center justify-start mt-4 gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-orange-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaComment className="text-orange-500" />
            <span>Comment ({comments})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
