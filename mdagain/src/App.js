import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import OurStory from "./components/OurStory";
import LoginModal from "./components/LoginModal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<h1>hello</h1>} />
        <Route path="/about" element={<OurStory />} />
        <Route path="/signin" element={<LoginModal />} />
      </Routes>
    </div>
  );
}

export default App;
