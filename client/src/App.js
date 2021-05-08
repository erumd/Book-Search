import Saved from "./containers/Saved";
import Search from "./containers/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useEffect } from "react";
// import API from "./utils/API";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


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
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
