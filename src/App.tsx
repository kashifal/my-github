import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Info from "./pages/Info.tsx";
import Table from "./pages/Table.tsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
}

export default App;
