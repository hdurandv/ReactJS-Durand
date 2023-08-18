import "./App.css";

// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
<<<<<<< HEAD
import ProductPage from "./pages/Producto/ProductPage";
=======
import CategoryPage from "./pages/CategoryPage/CategoryPage";
>>>>>>> 37db76f4c7bd0f782be839fa14bcbdabe5128222

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
<<<<<<< HEAD
          <Route path="/Producto" element={<ProductPage />} />
=======
          <Route path="/category/:speciesId" element={<CategoryPage />} />
>>>>>>> 37db76f4c7bd0f782be839fa14bcbdabe5128222
        </Routes>
      </div>
    </Router>
  );
};

export default App;
