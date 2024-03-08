/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.scss";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Loader from "../../../../components/Loader/index"
const AddNewTaskPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "low",
    status: "pending",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://task-management-apis.vercel.app/tasks",
        formData,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if(!res?.data?.error){
        setIsLoading(false)
        window.location.reload()
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <div className="add-new-task-wrapper">
      <div className="add-new-task-content">
        <div className="add-new-task-heading">
          <h1>Create a new task</h1>
        </div>
        <div className="add-new-task-form">
          <div className="add-new-task-input">
            <label>Enter the title</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
              }}
              type="text"
              placeholder="Title of the task"
            />
          </div>
          <div className="add-new-task-input">
            <label>Enter the Description</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
              type="text"
              placeholder="Description of the task"
            />
          </div>
          <div className="add-new-task-input">
            <label>Enter the Priority</label>
            <select
              onChange={(e) => {
                setFormData({ ...formData, priority: e.target.value });
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="add-new-task-btn">
            <button disabled={isLoading} onClick={()=>{
              handleCreate()
            }}>{
              isLoading?<Loader/>:"Submit"
            }</button>
          </div>
        </div>
      </div>
      <div onClick={onClose} className="add-new-task-close">
        <IoMdClose />
      </div>
    </div>
  );
};

export default AddNewTaskPopup;
