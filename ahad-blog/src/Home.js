import { useState } from "react";

const Home = () => {

     const [name, setName] = useState("Ahad");
     const [age, setAge] = useState(21);

     const handleClick = () => {
            setName("Ahad Danish");
            setAge(22);
        }

    const [count, setCounter] = useState(0);
    const Counter = () => {
        setCounter(count+1);
    }
    return ( 
        <div className="Home">
            <h2>HomePage</h2>

            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Update Info</button>
            <br />
            <button onClick={Counter}>Count: {count}</button>
        </div> 
        
    );
}
 
export default Home;