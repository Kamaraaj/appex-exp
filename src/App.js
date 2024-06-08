import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AuthUser from "./components/AuthUser";
import LandingPage from "./pages/LandingPage";
import Carts from "./pages/Carts";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="sign-up" element={<SignUp/>} />
        <Route path="sign-in" element={<SignIn />} />
        <Route element={<AuthUser/>}>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/carts" element={<Carts/>}/>
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
      </BrowserRouter>

  );
}

export default App;
