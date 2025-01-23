import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
}

export default App;
