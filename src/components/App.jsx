import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [spiner, setSpiner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpiner(false);
    }, 3000);
  }, []);

  return (
    <div className="page">
      <Header />
      {spiner ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
