import React from 'react';
import Frontpage from './components/Frontpage/frontpage';
import Login from './components/login/login';
import Dashboard from './components/Dashboard/dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  return (
 
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" component={Login} element={ <div>this is login</div> }/>
        <Route path="/home" element={ <div>this is Home</div> }/> */}
        <Route exact path="/frontpage" element={<Frontpage/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;