import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import Loader from "../../../components/Loader/index";
import { MdEdit } from "react-icons/md";
import Modal from "../../../components/Modal/index";
import AddNewTaskPopup from "./AddNewTaskPopup";
import EditTaskPopup from "./EditTaskPopup";
import { MdDelete } from "react-icons/md";
import DeleteTaskPopup from "./DeleteTaskPopup";
const DashboardView = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openAddTask, setOpenAddTask] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [singleTask, setSingleTask] = useState({});
  const [delteTask, setDelteTask] = useState(false)
  const fetchAllTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://task-management-apis.vercel.app/tasks",
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if (!res?.data?.error) {
        setIsLoading(false);
        setAllTasks(res?.data?.data);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  useEffect(() => {
    fetchAllTasks();
  }, []);
  return (
    <>
      <div className="dashboard-view-wrapper">
        <div className="dashboard-view-content">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="dashboard-view-all-tasks">
              <div className="dashboard-view-add-task">
                <button
                  onClick={() => {
                    setOpenAddTask(true);
                  }}
                >
                  Add New Task
                </button>
              </div>
              {allTasks?.map((ele, index) => {
                return (
                  <div key={index} className="task-card-wrapper">
                    <div className="task-card-content">
                      <div className="task-card-texts">
                        <h2>{ele?.title}</h2>
                        <p>{ele?.description}</p>
                        <button onClick={()=>{
                          setSingleTask(ele)
                          setDelteTask(true)
                        }}>
                          <MdDelete />
                        </button>
                      </div>
                      <div className="task-card-status">
                        <p
                          style={{
                            background:
                              ele?.status === "pending"
                                ? "#85600B"
                                : ele?.status === "completed"
                                ? "green"
                                : "transparent",
                          }}
                        >
                          {ele?.status}
                        </p>
                        <p
                          className={
                            ele?.priority === "high"
                              ? "high"
                              : ele?.priority === "medium"
                              ? "medium"
                              : "low"
                          }
                        >
                          {ele?.priority}
                        </p>
                      </div>
                    </div>
                    <div
                      className="task-card-edit"
                      onClick={() => {
                        setEditTask(true);
                        setSingleTask(ele);
                      }}
                    >
                      <MdEdit />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Modal onOpen={openAddTask} onClose={() => setOpenAddTask(false)}>
        <AddNewTaskPopup onClose={() => setOpenAddTask(false)} />
      </Modal>
      <Modal onOpen={editTask} onClose={() => setEditTask(false)}>
        <EditTaskPopup data={singleTask} onClose={() => setEditTask(false)} />
      </Modal>
      <Modal onOpen={delteTask} onClose={()=>setDelteTask(false)}>
        <DeleteTaskPopup data={singleTask} onClose={() => setDelteTask(false)}/>
      </Modal>
    </>
  );
};

export default DashboardView;
