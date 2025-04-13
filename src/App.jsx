import React, { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { ToastContainer, toast } from 'react-toastify';


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
  const notify = () => toast("Bookmark added Successfully!");
  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex  mt-5">
        <div className="blog-section w-[70%] ml-3">

          <Blogs handleBookmark={handleBookmark} handleRedingTime={handleRedingTime} notify={notify} ></Blogs>
        </div>
        <div className="notification-section w-[30%] border-2 border-gray-300 bg-gray-100 p-5 rounded-lg text-center mr-2 mx-auto h-auto">
          <h3>Reading Time : {readingTime}</h3>
          <h3>Bookmarked : {bookmarkedBlogs.length} </h3>
          {
            bookmarkedBlogs.map((marked) => <div key={marked.id} className='border-2 rounded-2xl m-3 h-20 p-4 bg-white'><p>{marked.title}</p></div>)
          }
        </div>
        <ToastContainer />
      
      </div>
    </>
  )
}

export default App
