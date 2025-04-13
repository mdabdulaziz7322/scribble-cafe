import React, { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/Blogs/Blogs'


function App() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarked = [...bookmarkedBlogs, blog];
    setBookmarkedBlogs(newBookmarked);
  }
  const handleRedingTime = (time, id) => {
    setReadingTime(readingTime + time);
    handleRemoveBookmark(id);
  }

  const handleRemoveBookmark = (id) => {
    const remaining = bookmarkedBlogs.filter(blog => blog.id !== id);
    setBookmarkedBlogs(remaining);
  }
  return (
    <>
      <Navbar></Navbar>


      <div className="main-container flex  mt-5">
        <div className="blog-section w-[70%] ml-3">
          
          <Blogs handleBookmark= {handleBookmark} handleRedingTime={handleRedingTime} ></Blogs>
        </div>
        <div className="notification-section w-[30%] border-2 border-gray-300 bg-gray-100 p-5 rounded-lg text-center mr-2">
          <h3>Reading Time : {readingTime}</h3>
          <h3>Bookmarked : {bookmarkedBlogs.length} </h3>
          {
            bookmarkedBlogs.map((marked) => <div key={marked.id} className='border-2 rounded-2xl m-3 h-20 p-4 bg-white'><p>{marked.title}</p></div>)
          }
        </div>
      </div>
    </>
  )
}

export default App
