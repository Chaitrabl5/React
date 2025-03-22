import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditUser() {
  const { id } = useParams(); // get id from params
  const navigate = useNavigate(); // For navigation

  // State for user data
  const [data, setData] = useState({ name: "", email: "" });

  // Fetch and prefill data for the selected user
  useEffect(() => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const selectedUser = users.find((user) => user.id === parseInt(id));

    if (selectedUser) {
      setData(selectedUser); // prefill form data
    }
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle user update
  const handleUpdate = () => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const updatedUsers = users.map((user) =>
      user.id === parseInt(id) ? { ...user, ...data } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log("Updated Users:", JSON.parse(localStorage.getItem("users")));
    alert("User updated successfully!");
    navigate("/manageusers"); // Redirect back to users page
  };

  return (
    <div className="mb-3 container text-center">
      <h1>Edit User Information</h1>

      <label>Fullname</label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter Full name"
        name="fullname"
        id="fullname"
        value={data.fullname || ""}
        onChange={handleChange}
      />
      <br />

      <label>Email</label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter Email ID"
        name="email"
        id="email"
        value={data.email || ""}
        onChange={handleChange}
      />
      <br />

      <button className="btn btn-primary" onClick={handleUpdate}>
        SAVE
      </button>
    </div>
  );
}

export default EditUser;
