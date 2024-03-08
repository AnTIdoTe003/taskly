/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import Loader from "../../../../components/Loader/index"
const DeleteTaskPopup = ({ data, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await axios.delete(
        `https://task-management-apis.vercel.app/tasks/${data?._id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if (!res?.data?.error) {
        setIsLoading(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <div className="delete-task-wrapper">
      <div className="delete-task-content">
        <div className="delete-task-header">
          <p>Do you want to delete the task?</p>
        </div>
        <div className="delete-task-btn">
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            {
              isLoading? <Loader/>:"Yes"
            }
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskPopup;
