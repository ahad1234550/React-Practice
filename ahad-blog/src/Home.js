import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [name, setName] = useState("ahad");

    const handleClick = () => {
        setName("Ahad");
    }

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect(()=>{
        console.log("useEffect ran");
    },[blogs]) // if there are so many states i.e blogs, age, name etc and you want to use on blogs and age both simple write comma separated [blogs,age]

    return (
        <div className="Home">
            <BlogList blogs = {blogs} title = "All Blogs" handleDelete = {handleDelete} />
            <h3>Name: { name }</h3>
            <button onClick={handleClick}>Correct Name</button>
        </div>
    );
}

export default Home;