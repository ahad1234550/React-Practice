import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetail = () => {

    const { id } = useParams();

    const dbApi = process.env.REACT_APP_DB_JSON_API_URL;
    const { data : BlogDetail, pending, error } = useFetch(dbApi + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        
        fetch(dbApi + id,{
            method : 'DELETE'
        }).then(() => {
            console.log('Blog ' + id + ' Deleted')
            navigate('/');
        })
    }

    return ( 
        <div className="blog-details">
            <h1>Blog Detail - { id }</h1>

            {error && <div>{error}</div>}
            {pending && <div>loading...</div>}
            {BlogDetail && (
                <article>
                    <h2>{ BlogDetail.title }</h2>
                    <p>Written by: { BlogDetail.author }</p>
                    <div>{ BlogDetail.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail;