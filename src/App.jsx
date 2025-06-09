import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FeaturedLocations from "./components/Featured/FeaturedLocations";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Reviews } from "./components/Reviews/Reviews";

// Auth pages (temporary placeholders)
const Login = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-3xl font-bold">Login Page</h1>
  </div>
);

const Register = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-3xl font-bold">Register Page</h1>
  </div>
);

function App() {
  const [sectionInView, setSectionInView] = useState("");

  return (
    <>
      <Header sectionInView={sectionInView} />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home setSectionInView={setSectionInView} />
              <FeaturedLocations setSectionInView={setSectionInView} />
              <About setSectionInView={setSectionInView} />
              <Gallery setSectionInView={setSectionInView} />
              <Reviews setSectionInView={setSectionInView} />
              <Contact setSectionInView={setSectionInView} />
              <Newsletter />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
