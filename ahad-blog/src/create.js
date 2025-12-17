import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ahad');

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form>
                <label>Blog Title</label>
                <input type="text" required value={ title } onChange={(e) => { setTitle(e.target.value) }}/>

                <label>Blog Body</label>
                <textarea required value={ body } onChange={(e) => { setBody(e.target.value) }}/>

                <label>Blog Author</label>
                <select required value={ author } onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="Ahad">Ahad</option>
                    <option value="Fahad">Fahad</option>
                </select>
            </form>
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p>
        </div>
    );
}

export default Create;