function Welcome() {
  return (
    <div className="mb-3 container text-center">
      <h1>Welcome To Users Module</h1>

      <p>Existing Users</p>

      <a href="login">
        <button type="button" className="btn btn-primary" href="login">
          Login
        </button>
      </a>

      <p>New Users</p>

      <a href="register">
        <button type="button" className="btn btn-primary">
          Register
        </button>
      </a>
    </div>
  );
}

export default Welcome;
