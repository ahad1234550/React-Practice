import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                setPending(false);
                setError(err.message);
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
            {error && <div>{ error }</div>}
            {pending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;