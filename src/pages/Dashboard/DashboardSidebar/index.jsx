import { useContext } from "react";
import "./style.scss";
import { UserInterface } from "../../../context/userContext";
const DashboardSidebar = () => {
  const { userDetails } = useContext(UserInterface);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="dashboard-sidebar-wrapper">
      <div className="dashboard-sidebar-content">
        <div className="dashboard-sidebar-top">
          <p>{userDetails?.name?.charAt(0)}</p>
          <p>{userDetails?.name}</p>
        </div>
        <div className="dashboard-sidebar-mid">
          <button>All Tasks</button>
          <button>High Priority</button>
          <button>Completed Tasks</button>
        </div>
        <div className="dashboard-sidebar-bottom">
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
