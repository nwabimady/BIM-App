import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MapViewer } from "./components/map-viewer";
import { Dashboard } from "./components/home";
import { BuildingViewer } from "./components/building-viewer";
import { ContextProvider } from "./middleware/context-provider";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/building" element={<BuildingViewer />} />
            <Route path="/map" element={<MapViewer />} />
            <Route path="/login" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
