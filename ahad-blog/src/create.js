import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ahad');
    const [pending, setPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setPending(true);

        const blog = { title, body, author };

        const dbApi = process.env.REACT_APP_DB_JSON_API_URL;

        fetch(dbApi,{
            method : 'POST',
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(blog)
        }).then(() => {
            console.log("Blog Added");
            setPending(false);

            // navigate(-1) // for going to previous page
            // navigate(1) // for going to forward page but sometime it don't make sense as there is no forward page always

            navigate('/'); //It will take to route "/" which is home page
        })
    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={ title } onChange={(e) => { setTitle(e.target.value) }}/>

                <label>Blog Body</label>
                <textarea required value={ body } onChange={(e) => { setBody(e.target.value) }}/>

                <label>Blog Author</label>
                <select required value={ author } onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="Ahad">Ahad</option>
                    <option value="Fahad">Fahad</option>
                </select>
                {!pending && <button>Add Blog</button>}
                {pending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;