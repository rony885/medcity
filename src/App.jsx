import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";

import Contact from "./pages/Contact/Contact";
import Service from "./pages/Service/Service";
import Doctors from "./pages/Doctors/Doctors";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";
import Packages from "./pages/Packages/Packages";
import PackagesDetails from "./pages/PackagesDetails/PackagesDetails";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Top from "./components/Top";
import NotFound from "./components/NotFound";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // loader duration

    return () => clearTimeout(timer);
  }, []);

  // 🔹 Show loader ONLY
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <BrowserRouter>
        <div className="wrapper">
          {/* <Loader/> */}
          <Header
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
            menuOpen={menuOpen}
          />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/services" element={<Service />}></Route>
            <Route path="/doctors" element={<Doctors />}></Route>
            <Route path="/doctor-details" element={<DoctorDetails />}></Route>
            <Route path="/packages" element={<Packages />}></Route>
            <Route
              path="/package-details"
              element={<PackagesDetails />}
            ></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog-details" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
          <Top />
          <ScrollTopBtn />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
