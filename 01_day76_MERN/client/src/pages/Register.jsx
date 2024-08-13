import React, { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(ProductContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const { name, email, mobile, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("this is form data = ", formData);

    let result = await register(name, email, mobile, password);

    console.log("User Registered at register.jsx", result);

    toast.success(result.message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    if (result.success) {
      navigate("/login");
    }
  };

  return (
    <div className="my-5">
      <div
        className="container my-3"
        style={{
          border: "2px solid blue",
          padding: "20px",
          width: "650px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={formData.name}
              name="name"
              type="text"
              className="form-control bg-black text-light"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              value={formData.email}
              name="email"
              type="email"
              className="form-control bg-black text-light"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              value={formData.mobile}
              name="mobile"
              type="number"
              className="form-control bg-black text-light"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={formData.password}
              name="password"
              type="password"
              className="form-control bg-black text-light"
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid col-6 mx-auto mt-5">
            <button type="submit" className="btn btn-warning">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
