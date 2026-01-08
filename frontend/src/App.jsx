import "./css/App.css";
import Home from "./pages/Home.jsx";
import Favirote from "./pages/Favirote.jsx";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";

function App() {
  return (
    <div className="app">
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favirote />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
}

export default App;
