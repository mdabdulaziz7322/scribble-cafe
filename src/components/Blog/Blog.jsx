import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmark, handleRedingTime}) => {

    return (
        <div>
            <div className="card bg-base-100 w-96">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className='flex justify-between gap-10 items-center'>
    <div className="author flex items-center gap-2">
    <img className='w-10' src={blog.author_img} alt="" />
        <h3 className=' font-bold'>{blog.author}</h3>
    </div>
    <p>{blog.posted_date}</p>
    </div>
    <div className='flex'>
        {
            blog.hashtags.map((hash) => <p className='font-bold'>#{hash}</p>) 
        }
    </div>
    <div className="card-actions  mt-3 flex justify-between items-center">
      <button onClick={()=> handleRedingTime(blog.reading_time)} className="btn btn-primary ">Mark as read</button>
      <button onClick={ () => handleBookmark(blog)}><FaBookmark size={25} /></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;