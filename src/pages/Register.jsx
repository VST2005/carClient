import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigation ke liye
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    carnumber:"",
  });

  const [message, setMessage] = useState("");

  // Input change handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/register", formData);
      setMessage(res.data.message || "Registration successful!");

      // Form reset
      setFormData({ name: "", email: "", password: "" ,carnumber:""});

      // 1 second ke delay ke baad login page par bhejna
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Something went wrong, please try again."
      );
    }
  };

 return (
  
  
  <div
    className="d-flex align-items-center justify-content-center vh-100"
    style={{
      // background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    }}
  >
    
    
    <div
      className="card shadow-lg p-4 rounded-4 border-0"
      style={{
        maxWidth: "420px",
        width: "100%",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.85)",
      }}
    >
      <h2 className="mb-4 text-center text-primary fw-bold">
         Car Service Register
      </h2>

      {message && (
        <div className="alert alert-info text-center fw-semibold py-2">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Full Name</label>
          <div className="input-group">
            <span className="input-group-text bg-primary text-white">
              <i className="bi bi-person-fill"></i>
            </span>
            <input
              type="text"
              className="form-control rounded-end"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email Address</label>
          <div className="input-group">
            <span className="input-group-text bg-primary text-white">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <input
              type="email"
              className="form-control rounded-end"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <div className="input-group">
            <span className="input-group-text bg-primary text-white">
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="password"
              className="form-control rounded-end"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        {/* Car Number */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Car Number</label>
          <div className="input-group">
            <span className="input-group-text bg-primary text-white">
              <i className="bi bi-car-front-fill"></i>
            </span>
            <input
              type="text"
              className="form-control rounded-end"
              name="carnumber"
              value={formData.carnumber}
              onChange={handleChange}
              placeholder="Enter your car number"
              required
            />
          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="btn w-100 rounded-pill fw-semibold text-white"
          style={{
            background: "linear-gradient(45deg, #4facfe, #00f2fe)",
            border: "none",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(45deg, #00f2fe, #4facfe)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(45deg, #4facfe, #00f2fe)")
          }
        >
          Register
        </button>
      </form>

    </div>
  </div>
);

}

export default Register;