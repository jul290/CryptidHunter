import "./App.css";
import "./TopPanel";
import TopPanel from "./TopPanel";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
