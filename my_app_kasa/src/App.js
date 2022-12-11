import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/NotFound";
import Lodging from "./pages/Lodging";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/p7_OP" element={<Home />} />
        <Route path="/p7_OP/About" element={<About />} />
        <Route path="/p7_OP/lodging/:id" element={<Lodging />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
