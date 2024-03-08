/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Loader from "../../../../components/Loader";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
const EditTaskPopup = ({ onClose, data }) => {
  console.log(data);
  const [formData, setFormData] = useState({
    title: data?.title,
    description: data?.description,
    priority: data?.priority,
    status: data?.status,
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleEdit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.patch(
        `https://task-management-apis.vercel.app/tasks/${data?._id}`,
        formData,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if (!res?.data?.error) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <div className="add-new-task-wrapper">
      <div className="add-new-task-content">
        <div className="add-new-task-heading">
          <h1>Edit a task</h1>
        </div>
        <div className="add-new-task-form">
          <div className="add-new-task-input">
            <label>Enter the title</label>
            <input
              value={formData?.title}
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
              value={formData?.description}
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
              value={formData?.priority}
              onChange={(e) => {
                setFormData({ ...formData, priority: e.target.value });
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="add-new-task-input">
            <label>Enter the Status</label>
            <select
              value={formData?.status}
              onChange={(e) => {
                setFormData({ ...formData, status: e.target.value });
              }}
            >
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="add-new-task-btn">
            <button
              onClick={() => {
                handleEdit();
              }}
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <div onClick={onClose} className="add-new-task-close">
        <IoMdClose />
      </div>
    </div>
  );
};

export default EditTaskPopup;
