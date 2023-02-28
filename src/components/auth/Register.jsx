import React, { Component } from 'react'
import api from "../../utils/api";
export default class Register extends Component {
  
  constructor(){
super(); 
// to give a call to the base class constructor
this.state = {
  name: "",
  email: "",
  password: "",
  confirmePassword: "",
}
// state: its an object from the base class i.e. Component class to hold the data for our component.
  }
  
  onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value});
    // we need to collect the data for every changed field. 
    // we need to update the state accordingly. 
    console.log(e.target.value)
    //e : event 
    // target : location where event happened
    //value : whatever the input that we provided it will give us that data.  
    console.log(e.target.name)
    // e: event.
    // target : location where event happened.
    //name: name field of the input tag. 
  };
  onSubmit=(e)=>{
e.preventDefault(); 
console.log(this.state);
 
api.post('/users', this.state); 
// end point 
// data 
// headrs 

}; 



  render() {
    // destructuring the state object. 
    const { name, email, password,
      confirmePassword } = this.state; 
    return (
      <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

        <section class="container">
      <h1 class="x-large text-primary">Sign Up</h1>
      <p class="lead"><i class="fa fa-user-circle-o"></i>Create your Account</p>
      <form class="form"
      onSubmit = {this.onSubmit}>  
        <div class="form-group">
          <input type="text" placeholder="Enter the Name" name ="name"
           
          value={name} 
          onChange={this.onChange} />
        </div>
        <div class="form-group">
          <input type="email" placeholder="enter your email" name="email"           
           value={email} 
            onChange={this.onChange} />

          <small
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" name="password" 
          value={password}
          onChange={this.onChange}/>
        </div>

        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            minLength="6"
            value={confirmePassword}
            onChange={this.onChange} />

          
        </div>
        <div class="form-group">
          <input type="date" name="dob" placeholder="Enther DOB" />
        </div>
        <div class="form-group">
          <input type="submit" class="btn btn-primary" value="Register" />
        </div>
      </form>
    </section>
      </div>
    )
  }
}
