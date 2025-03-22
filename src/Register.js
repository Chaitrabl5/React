import React from "react";
import { Navigate } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault(); // stop page refresh
    const fullname = event.target.elements.fullname.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmpassword = event.target.elements.confirmpassword.value;

    const user = {
      // create new object
      id: Number(new Date()),
      fullname: fullname,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };

    if (fullname === "") {
      alert("Please enter fullname");
    } else {
      this.setState({
        // whenever state udpate, component rerender
        redirect: true,
      });
    }

    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users)); // set item in local storage
    console.log(this.state.users);
    console.log(JSON.parse(localStorage.getItem("users")));
  };

  render() {
    const { redirect } = this.state; // Object Destructuring
    console.log(redirect);
    /*

        if (redirect) {
            return <div className='m-4 col-xxl-6'></div>
        } else {
            return <div className='m-4 col-xxl-6'>something else</div> 
        }

        */

    return (
      <div className="m-4 col-xxl-6">
        {redirect && <Navigate to="/registersuccess" />}
        <form method="get" onSubmit={this.handleSubmit}>
          <h1>REGISTER</h1>
          Fullname
          <input
            className="form-control"
            type="text"
            placeholder="Enter Full name"
            name="fullname"
            id="fullname"
          />
          <br />
          Email
          <input
            className="form-control"
            type="text"
            placeholder="Enter Email ID"
            name="email"
            id="email"
          />
          <br />
          Password
          <input
            className="form-control"
            type="password"
            placeholder="Enter password"
            name="password"
            id="password"
          />
          <br />
          Confirm password
          <input
            className="form-control"
            type="password"
            placeholder="Confirm password"
            name="confirmpassword"
            id="confirmpassword"
          />
          <br />
          <button className="btn btn-primary mt-2">REGISTER</button>
        </form>
      </div>
    );
  }
}

export default Register;
