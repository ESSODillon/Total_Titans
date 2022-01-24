import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";

// Page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Workout from "./pages/workout/Workout";
import ThemeSelector from "./components/ThemeSelector";

// Styles
import "./App.css";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/Total_Titans/">
            <Home />
          </Route>
          <Route exact path="/Total_Titans/create">
            <Create />
          </Route>
          <Route exact path="/Total_Titans/search">
            <Search />
          </Route>
          <Route exact path="/Total_Titans/workouts/:id">
            <Workout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
