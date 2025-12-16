import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setBlogs(data);
        });
    });

    return (
        <div className="Home">
            {/* This will not work because useEffect and fetch takes some times so in start blogs is null so it will give error to show the blogs
            <BlogList blogs = {blogs} title = "All Blogs" />  */}

            {/* Here I used blogs && ..., next part of && works only if blogs will be there, so after the useEffect is done and blogs will have some value it will run */}
            { blogs && <BlogList blogs = {blogs} title = "All Blogs" /> }
        </div>
    );
}

export default Home;