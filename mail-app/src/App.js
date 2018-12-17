import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import SideBar from "./components/SideBar"


class App extends Component{

  render(){
    return(
      <div className="App">
        <SideBar />
      </div>
    );
  }
}



export default hot(module)(App);