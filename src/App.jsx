import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Club from "./Pages/Club";
import Contact from "./Pages/Contact";
import Programme from "./Pages/Pragramme";
import Research from "./Pages/Research";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/club" element={<Club />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
