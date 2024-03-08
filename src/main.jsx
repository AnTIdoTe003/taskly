import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserInterfaceProvider } from "./context/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserInterfaceProvider>
    <App />
  </UserInterfaceProvider>
);
