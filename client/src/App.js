import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StateDemo from "./StateDemo";
import AuthDemo from "./AuthDemo";
import FetchDemo from "./FetchDemo";
import ProtectedForm from "./AuthDemo/form";
import { createContext } from "react";

export const ThemeContext = createContext({ textColor: "white" });

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={{ textColor: "black" }}>
        <Router>
          <Routes>
            <Route path="/stateDemo" element={<StateDemo />} />
            <Route path="/fetchDemo" element={<FetchDemo />} />
            <Route path="/authDemo" element={<AuthDemo />} />
            <Route path="/article" element={<ProtectedForm />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
