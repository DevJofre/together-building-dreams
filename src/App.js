import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>Home</li>
          <li>Contato</li>
          <li></li>
          <li></li>
        </ul>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/company">
            <Company />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/newproject">
            <NewProject />
          </Route>
        </Routes>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
