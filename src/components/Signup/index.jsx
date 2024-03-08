/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import "./style.scss";
import axios from "axios";
import Loader from "../Loader/index";
const Signup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleCreateAccount = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://task-management-apis.vercel.app/sign-up",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res?.data?.error) {
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
    <div className="signup-wrapper">
      <div className="signup-content">
        <div className="signup-heading">
          <p>Create your account</p>
        </div>
        <div className="signup-form-wrapper">
          <div className="signup-input-wrapper">
            <label>Enter your name</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              type="email"
            />
          </div>
          <div className="signup-input-wrapper">
            <label>Enter your email</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              type="email"
            />
          </div>
          <div className="signup-input-wrapper">
            <label>Enter your password</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              type="password"
            />
          </div>
          <div className="signup-form-btn">
            <button disabled={isLoading} onClick={() => handleCreateAccount()}>
              {isLoading ? <Loader /> : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <div className="signup-close-btn" onClick={onClose}>
        <MdCancel />
      </div>
    </div>
  );
};

export default Signup;
