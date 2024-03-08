import "./style.scss";
import DashboardView from "./DashboardView";
import DashboardSidebar from "./DashboardSidebar";
const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-left">
            <DashboardSidebar />
          </div>
          <div className="dashboard-right">
            <DashboardView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
