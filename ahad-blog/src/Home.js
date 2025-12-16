const Home = () => {
    const handleClick = () => {
        console.log("Hello Ahad");
    }
    const handleClickTarget = (e) => {
        console.log("Hello Ahad", e);
    }

    const handleClickName = (name) => {
        console.log("Name: Hello " + name);
    }
 
    const handleClickNameTarget = (name,e) => {
        console.log("Name: Hello " + name, e);
    }

    return ( 
        <div className="Home">
            <h2>HomePage</h2>

            <button onClick={handleClick()}>Click Me</button> ### Will render automatically on load <br/>
            <button onClick={handleClick}>Click Me</button> ### Correct Way: will render on click <br/>
            <button onClick={handleClickTarget}>Click Me</button> ### Correct Way: will render on click with event properties e <br/>
            <button onClick={handleClickName("Ahad")}>Click Me</button> ### Will render automatically on load <br/>
            <button onClick={() => handleClickName("Ahad")}>Click Me</button> ### Correct Way: will render on click <br/>
            <button onClick={(e) => handleClickNameTarget("Ahad", e)}>Click Me</button> ### Correct Way: will render on click with event properties e <br/>

            ### Note: Auto execution function on load with console two times due to StrictMode used in index.js
        </div> 
    );
}
 
export default Home;