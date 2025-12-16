import './App.css';

function App() {
  const title = "Welcome to new blog";
  const likes = 50;
  // const person = { name: 'ahad', age: 22 };

  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p> { person } </p> */}

        <p>{"Hello Ninjas"}</p>
        <p>{10}</p>
        <p>{[10, 20, 30, 40]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
