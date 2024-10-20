import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav-section">
        <div>
          <h1>Jobly</h1>
        </div>
        <div className="sub-nav">
          <li>
            <a>Companies</a>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <button><a>Signup</a></button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
