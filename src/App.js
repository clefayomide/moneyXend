import { Routes, Route } from "react-router-dom";
import Base from "./components/base-component/Base";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Base />} />
      </Routes>
    </div>
  );
}

export default App;
