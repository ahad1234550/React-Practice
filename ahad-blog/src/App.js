import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './create';
import BlogDetail from './BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
