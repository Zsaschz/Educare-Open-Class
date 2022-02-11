import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StateDemo from "./StateDemo";
import AuthDemo from "./AuthDemo";
import FetchDemo from "./FetchDemo";
import ProtectedForm from "./AuthDemo/form";
import { createContext } from "react";

// TODO: Create theme context
export const ThemeContext = null;

function App() {
  return (
    <div className="App">
      {/* TODO: Wrap in context */}
      <Router>
        <Routes>
          <Route path="/stateDemo" element={<StateDemo />} />
          <Route path="/fetchDemo" element={<FetchDemo />} />
          <Route path="/authDemo" element={<AuthDemo />} />
          <Route path="/article" element={<ProtectedForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
