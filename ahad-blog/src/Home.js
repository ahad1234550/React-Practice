import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setPending(false);
            });
    });

    // use this as it will fetch the data after 1 second so that you can see loading...
    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:8000/blogs")
    //             .then(res => {
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 setBlogs(data);
    //                 setPending(false);
    //             });
    //     }, 1000);
    // });

    return (
        <div className="Home">
            {pending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;