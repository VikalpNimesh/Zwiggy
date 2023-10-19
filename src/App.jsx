// import Home from "./Home";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./Error";
import Header from "./components/Header";
import Newbody from "./components/Newbody";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <BrowserRouter >
      <Header />
        <Routes >
              <Route path="/" element={<Newbody />}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="*" element={<Error/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
