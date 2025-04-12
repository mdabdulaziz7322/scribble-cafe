import React, { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Blogs from './components/Blogs/Blogs'


function App() {

  return (
    <>
      <Navbar></Navbar>


      <div className="main-container flex  mt-5">
        <div className="blog-section w-[70%]">
          
          <Blogs></Blogs>
        </div>
        <div className="notification-section w-[30%]">
          <h3>Reading Time :</h3>
          <h3>Bookmarked : </h3>
        </div>
      </div>
    </>
  )
}

export default App
