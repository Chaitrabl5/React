import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            Welcome
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav flex-row me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/chatlist">
                  Group Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/manageusers">
                  Manage Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/documentlist">
                  Manage Documents
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/welcome">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
