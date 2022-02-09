import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StateDemo from "./StateDemo";
import AuthDemo from "./AuthDemo";
import FetchDemo from "./FetchDemo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/stateDemo" element={<StateDemo />} />
          <Route path="/fetchDemo" element={<FetchDemo />} />
          <Route path="/authDemo" element={<AuthDemo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
