import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../pages/SingUp/Signup";
import Login from "../pages/Login/Login";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import DragonsDashboard from "../pages/DragonsDashboard/DragonsDashboard";
import Appbar from "./Appbar";
import Footer from "./Footer";
import CreateDragonPage from "../pages/CreateDragon/CreateDragonPage";
import SingleDragonPage from "../pages/SingleDragonPage/SingleDragonPage";
import EditDragonPage from "../pages/EditDragonPage/EditDragonPage";

export default function Routes() {
  return (
    <div
      style={{
        background: "#ececec",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Router>
        <AuthProvider>
          <Appbar />

          <Switch>
            <PrivateRoute exact path="/" component={DragonsDashboard} />
            {/* <PrivateRoute exact path="/dragoes" component={DragonsDashboard} /> */}
            <PrivateRoute
              exact
              path="/cadastrar-dragoes"
              component={CreateDragonPage}
            />
            <PrivateRoute
              exact
              path="/dragoes/:id"
              component={SingleDragonPage}
            />
            <PrivateRoute
              exact
              path="/dragoes/:id/editar"
              component={EditDragonPage}
            />
            <Route path="/cadastro" component={Signup} />
            <Route path="/alterar-cadastro" component={UpdateProfile} />
            <Route path="/login" component={Login} />
            <Route path="/recuperar-senha" component={ForgotPassword} />
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}
