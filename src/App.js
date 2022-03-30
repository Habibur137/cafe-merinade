import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;
