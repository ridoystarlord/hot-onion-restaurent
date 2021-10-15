import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/Shared/NotFound/NotFound";
import Signup from "./components/Shared/UserAuthentication/Signup/Signup";
import Login from "./components/Shared/UserAuthentication/Login/Login";
import FoodDetails from "./components/Shared/FoodDetails/FoodDetails";
import AuthProvider from "./context/AuthProvider";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/food/:id">
              <FoodDetails></FoodDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
