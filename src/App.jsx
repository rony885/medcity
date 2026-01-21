import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="wrapper">
          {/* <Loader/> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
