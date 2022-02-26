import React from "react";
import Signup from "../components/authentication/Signup";
import AuthProvider from "../contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../components/authentication/Profile";
import Login from "../components/authentication/Login";
import PrivateRoute from '../components/authentication/PrivateRoute';
import ForgotPassword from "../components/authentication/ForgotPassword";
import UpdateProfile from "../components/authentication/UpdateProfile";
import DashBoard from "./google-drive/DashBoard";
import Home from "../front-end/Home";

const App = () => {
  return (
        <Router>
          <AuthProvider>
            <Routes>

              {/* Drive */}
              <Route path="/" element={<Home/>}></Route>
              <Route exact path="/dashboard" element={<PrivateRoute />}>
                <Route exact path="/dashboard" element={<DashBoard/>} />
              </Route>
              <Route exact path="/folder/:folderId" element={<PrivateRoute />}>
                <Route exact path="/folder/:folderId" element={<DashBoard/>} />
              </Route>

              {/* Profile */}
              <Route exact path="/user" element={<PrivateRoute />}>
                <Route exact path="/user" element={<Profile />} />
              </Route>
              <Route path="/update-profile" element={<UpdateProfile/>} />

              {/* Auth */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />

            </Routes>
          </AuthProvider>
        </Router>
      // </div>
    // </Container>

  );
};

export default App;