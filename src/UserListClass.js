import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class UserListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users || [], // state initialization
      showModal: false,
      userToDelete: null,
    };
  }

  componentDidMount() {
    console.log("Welcome - componentDidMount 3");

    const localstoredUsers = JSON.parse(localStorage.getItem("users"));
    console.log(localstoredUsers);

    this.setState({ users: localstoredUsers }, () => {
      console.log("Updated Users in State:", this.state.users);
    });
  }

  handleDelete = (id) => {
    this.setState({ showModal: true, userToDelete: id });
  };

  confirmDelete = () => {
    const updatedUsers = this.state.users.filter(
      (user) => user.id !== this.state.userToDelete
    );
    this.setState({
      users: updatedUsers,
      showModal: false,
      userToDelete: null,
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  handleClose = () => {
    this.setState({ showModal: false, userToDelete: null });
  };

  render() {
    return (
      <div className="mb-3 container text-center">
        <h1>USERS</h1>
        <table className="table table-striped-columns">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Email ID</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((item, index) => (
              <tr key={index}>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/edituser/${item.id}`}>Edit</Link>
                  <Link onClick={() => this.handleDelete(item.id)}>
                    /Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.confirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UserListClass;
