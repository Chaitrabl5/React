import React from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";
import Register from "./Register";
import RegisterSuccess from "./RegisterSuccess";
import UserListClass from "./UserListClass";
import EditUser from "./EditUser";
import ChatList from "./ChatList";
import DocumentList from "./DocumentList";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Navbar";
export default class Main extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          fullname: "Text User",
          email: "textuser@gmail.com",
        },
        {
          id: 2,
          fullname: "Anne Hunter",
          email: "annehunter@mail.com",
        },
        {
          id: 3,
          fullname: "Jale Boser",
          email: "jale@yahoo.com",
        },
      ],
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<Welcome />}></Route>

            <Route path="/" element={<Nav />}>
              <Route
                path="/manageusers"
                element={<UserListClass users={this.state.users} />}
              />
              <Route path="/chatlist" element={<ChatList />} />
              <Route path="/documentlist" element={<DocumentList />} />
              <Route path="/loginsuccess" element={<LoginSuccess />} />
              <Route
                path="/edituser/:id"
                element={<EditUser users={this.state.users} />}
              />
              <Route path="/welcome" element={<Welcome />} />
            </Route>

            <Route path="/register" element={<Register />} />

            <Route path="/deleteuser/:id" element={<EditUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registersuccess" element={<RegisterSuccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
