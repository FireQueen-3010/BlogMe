import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Panel from "./pages/UserPanel/Panel";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Panel} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
