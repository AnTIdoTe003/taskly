/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.scss";
import axios from "axios";
import Loader from "../Loader/index.jsx";
import { IoClose } from "react-icons/io5";
const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // const [userDetails, setUserDetails] = useState({})
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://task-management-apis.vercel.app/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res?.error) {
        setIsLoading(false);
        localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
        localStorage.setItem("token", res?.data?.data?.token);
        window.location.reload();
        onClose();
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-content">
        <div className="login-header">
          <h3>Login to your account</h3>
        </div>
        <div className="form-wrapper">
          <div className="input-wrapper">
            <label htmlFor="email">Enter your email</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
              type="email"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Enter your password</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
              type="password"
            />
          </div>
          <button disabled={isLoading} onClick={() => handleLogin()}>
            {isLoading ? <Loader /> : "Submit"}
          </button>
        </div>
      </div>
      <div className="login-close" onClick={onClose}>
        <IoClose />
      </div>
    </div>
  );
};

export default Login;
