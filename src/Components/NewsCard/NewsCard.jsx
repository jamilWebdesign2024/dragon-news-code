import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import moment from "moment";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    details,
    image_url,
    rating,
    total_view,
    
  } = news;

  return (
    <div className="bg-white rounded-xl shadow p-4">
      {/* Author */}
      <div className="flex justify-between items-center bg-base-200 mb-3 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {moment(news.author.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
            <span><CiBookmark size={24}/></span>
            <span><CiShare2 size={24}/></span>
          {/* <button className="btn btn-ghost btn-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
                d="M17.25 6.75L6.75 17.25M6.75 6.75l10.5 10.5" /></svg>
          </button>
          {/* <button className="btn btn-ghost btn-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
                d="M4.5 12h15M12 4.5v15" /></svg>
          </button> */} 
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-3">{title}</h2>

      {/* Image */}
      <div className="mb-3">
        <img
          src={image_url}
          alt="news"
          className="rounded-md w-full object-cover"
        />
      </div>

      {/* Details */}
      <p className="text-sm text-gray-700">
        {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        <span className="text-blue-600 font-semibold cursor-pointer ml-2">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center border-t pt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "text-orange-500" : "text-gray-300"} />
          ))}
          <span className="text-gray-600 ml-1">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

