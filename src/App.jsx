import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Button from "./components/Button.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Research from "./pages/Research.jsx";
import Programme from "./pages/Programme.jsx";
import Events from "./pages/Events.jsx";
import Club from "./pages/Club.jsx";
import Career from "./pages/Career.jsx";
import Contact from "./pages/Contact.jsx";

function NotFound() {
  return (
    <main className="bg-surface-muted">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 text-center md:px-10">
        <p className="eyebrow text-primary">404</p>
        <h1 className="mt-4 text-4xl font-extrabold text-text">This page is in superposition</h1>
        <p className="mx-auto mt-4 max-w-md text-text-muted">
          The page you&apos;re looking for might exist somewhere — just not at this address.
          Let&apos;s observe the home page instead.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/">Go Home</Button>
          <Button variant="outline" to="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden" style={{ overflowClipMargin: 0 }}>
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/events" element={<Events />} />
          <Route path="/club" element={<Club />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
