import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , []);
    return (
        <div>
            <h3 className="text-3xl mb-7 ml-3">Available Blogs: {blogs.length}</h3>
            <div className="all-blogs grid grid-cols-2 gap-5">
                {
                    blogs.map((blog)=> <Blog blog = {blog}></Blog> )
                }
            </div>
        </div>
    );
};

export default Blogs;