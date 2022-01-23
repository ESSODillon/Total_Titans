import { BrowserRouter, Switch, Route } from "react-router-dom";

// Page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Workout from "./pages/workout/Workout";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/workouts/:id">
            <Workout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
