import React, { Suspense } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

const SignIn = React.lazy(()=>import("./pages/SignIn"));
const SignUp = React.lazy(()=>import("./pages/SignUp"));
const Dashboard = React.lazy(()=>import("./pages/Dashboard"));



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />}/>
      <Route path="/signup" element={<Suspense fallback={'loading...'}><SignUp/></Suspense>}/>
      <Route path="/signin" element={<Suspense fallback={'loading...'}><SignIn/></Suspense>}/>
      <Route path="/dashboard" element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
