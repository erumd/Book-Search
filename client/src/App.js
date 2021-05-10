import Saved from "./pages/Saved";
import Search from "./pages/Search";
// import { useEffect } from "react";
// import API from "./utils/API";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path="/saved" component={Saved} />
          <Route path="/" component={Search} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
