import React, { Component } from 'react'
// import : here it has to import a class / function from the provided location/ library. 
import { Link } from 'react-router-dom'



export default class Landing extends Component {
  render() {
    return (
      <>
<section class="landing"> 
  <div class="dark-overlay">
    <div class="landing-inner "> 
<h1 class="x-large"> Developer Connector</h1>  
<h4>
Creat a devloper profile/portfolio, share posts and get help from other devlopers  

</h4>
<div>

<Link to="/login"  class="btn-primary">Login</Link >
<Link to="/register" class="btn-light">Register</Link >


</div>
</div>
</div>
</section>      </>

    )
  }
}


// export : to use it as public 
// defualt : will use the same name 
// class : keyword to define the class 
// landing : name of the class i.e name of the components 
//-----------------------------------------------------
// extends: will use it for inheritance 
// component: name of the base class / parent class
// render method/ function: this method is used to render the content to the browser 
// return st. : from render method will hold the complate rendering content under the fragment (<></>)
// fragment: it is coming from react to hold rendering content/ displaying content to the browser
// instead of fragment we can use div to hold the content but in recent versions of react like 17 or 18 fragemnt is recommended to hold the content which needs to be rendered