import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const dbApi = process.env.REACT_APP_DB_JSON_API_URL;
    const { data: blogs, pending, error } = useFetch(dbApi);

    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {pending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;