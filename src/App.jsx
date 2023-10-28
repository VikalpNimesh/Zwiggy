import  { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Newbody from "./components/Newbody";
import Footer from "./components/Footer";
import ItemCard from "./components/ItemCard";
import Shimmercard from "./components/Shimmercard";
import Instamart from "./components/Instamart";

// Dynamically import components
const About = lazy(() => import("./About"));
const Contact= lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));
const Error = lazy(() => import("./Error"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Newbody />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={
              <Suspense fallback={<Shimmercard/>}><Contact /></Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/instamart"
            element={
              <Suspense fallback={<div>Loading...</div>}>
               <Instamart/>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Error />
              </Suspense>
            }
          />
          <Route
            path="restaurants/:img"
            element={
              <Suspense fallback={<Shimmercard/>}>
                <ItemCard />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
