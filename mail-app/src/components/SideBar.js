import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Components.css";
import MaterialIcon, {colorPalette} from 'material-icons-react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import MailContent from "./MailContent";
import test from "./test";
import Nomail from "./Nomail";


class SideBar extends Component{
  constructor(){
    super();
    this.state={
      mails: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/mails')
    .then(res => res.json())
    .then(mails => this.setState({mails}, () => console.log('Mails',
    mails)));
  } 

  render(){
    const {mails} = this.state;
    return(
      <HashRouter>
      <div className="s-layout">
        <div className="s-layout__sidebar">
          <a className="s-sidebar__trigger" href="#0">
            <i className="fa fa-bars"></i>
          </a>
          <nav className="s-sidebar__nav">
            <div className="title">
            <NavLink to="/">
            <h1>Inbox</h1>
            </NavLink>
            <a>Search</a> <MaterialIcon icon="search"/>
            </div>

            <ul>
            {mails.map(mail =>
              <li key={mail.subject}>
                <h6>{mail.time}</h6>
                
                <NavLink to="/mail" className="s-sidebar__nav-link">{mail.from}
                <p className="test">{mail.subject}</p>
                </NavLink>

              </li>
            )}
            </ul>

            </nav>
      </div>
      
      <main className="s-layout__content">
        <Route exact path="/" component={Nomail}/>
        <Route path="/mail" component={MailContent}/>
        <Route path="/test" component={test}/>
      </main>
</div>
</HashRouter>

    );
  }
}



export default hot(module)(SideBar);