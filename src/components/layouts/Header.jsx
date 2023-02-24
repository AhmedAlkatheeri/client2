import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <>
<nav class="navbar bg-dark" > 
<h1>
     
<Link to="/"
><i class="fas fa-code"></i>  DevConnector </Link>
</h1>
<ul> 
<Link to="Devlopers">Devlopers </Link>
<Link to="/register">Register </Link>
<Link to="/login">Login </Link>
</ul>
 </nav>      </>
    )
  }
}
