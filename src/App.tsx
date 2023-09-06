import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MapViewer } from "./components/map-viewer";
import { LoginForm } from "./components/login-form";
import { BuildingViewer } from "./components/building-viewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/building" element={<BuildingViewer />} />
        <Route path="/map" element={<MapViewer />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
