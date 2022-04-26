//Imports Components
import MainPage from "./components/MainPage/MainPage.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container my-3">
      <h1>Breaking Bad Wiki</h1>
      <hr />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
