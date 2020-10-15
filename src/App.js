import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Profile} from "./components/Profile";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="row">
          <div className="col-3">
            <Menu/>
          </div>
          <div className="col-9">
            <Route path="/profile" render={()=>{return <Profile/>}}/>
            <Route path="/settings" render={()=>{return <h1>Это Настройки</h1>}}/>
            <Route path="/users" render={()=>{return <h1>Это список пользователей</h1>}}/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
