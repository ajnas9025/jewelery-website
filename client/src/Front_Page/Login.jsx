import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Log() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Sending Data:", user);
  
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        name: user.name,
        email: user.email,
      });
  
      console.log("Login Success:", response.data);
  
      // Redirect based on role
      if (response.data.role === "admin") {
        navigate("/admin"); // Redirect to admin page
      } else {
        navigate("/home"); // Redirect to user home page
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data);
      alert(error.response?.data?.message || "Login failed");
    }
  };
  
  return (
    <div>
      <section className="contact_section layout_padding">
        <div className="container px-0">
          <div className="heading_container">
            <h2>Login</h2>
          </div>
        </div>
        <div className="container container-bg">
          <div className="row">
            <div className="col-lg-7 col-md-6 px-0">
              <div className="map_container">
                <img alt="login-image" src="images/log.avif" />
              </div>
            </div>
            <div className="col-md-6 col-lg-5 px-0">
              <form onSubmit={submitForm}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={inputHandler}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={inputHandler}
                  />
                </div>
                <div className="d-flex">
                  <button type="submit">Login</button>
                </div>
              </form>

              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Log;
