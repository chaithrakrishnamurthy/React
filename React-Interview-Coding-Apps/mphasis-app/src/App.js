import "./App.css";
import Nextpage from "./Nextpage";
import InputPage from "./inputPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputPage />}></Route>
        <Route path="/nextpage/:text" element={<Nextpage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
