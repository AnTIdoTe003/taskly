import { Link } from "react-router-dom";
import "./style.scss";
import Modal from "../Modal";
import { useContext, useState } from "react";
import Login from "../Login";
import { UserInterface } from "../../context/userContext";
import Signup from "../Signup";

const Navbar = () => {
  const [onOpen, setOnOpen] = useState(false);
  const [onSignupOpen, setOnSignupOpen] = useState(false);
  const { isUser } = useContext(UserInterface);
  const NavLinks = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "About",
      slug: "/about",
    },
    {
      title: "Resources",
      slug: "/resources",
    },
    {
      title: "Dashboard",
      slug: "/dashboard",
    },
  ];
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-content">
          <div className="nav-left">
            <img
              src="https://i.pinimg.com/736x/f8/98/bf/f898bfb34a80f0784e1417c86a096e13.jpg"
              alt="Task management app logo"
            />
            <p>Taskly</p>
          </div>
          <div className="nav-mid">
            {NavLinks.map((ele, index) => {
              return (
                <Link key={index} to={ele.slug}>
                  {ele.title}
                </Link>
              );
            })}
          </div>
          <div className="nav-right">
            {isUser ? (
              <button onClick={() => handleLogout()}>Logout</button>
            ) : (
              <button onClick={() => setOnOpen(true)}>Login</button>
            )}
            {!isUser && (
              <button onClick={() => setOnSignupOpen(true)}>Signup</button>
            )}
          </div>
        </div>
      </div>
      <Modal onOpen={onOpen} onClose={() => setOnOpen(false)}>
        <Login onClose={() => setOnOpen(false)} />
      </Modal>
      <Modal onOpen={onSignupOpen} onClose={() => setOnSignupOpen(false)}>
        <Signup onClose={() => setOnSignupOpen(false)} />
      </Modal>
    </>
  );
};

export default Navbar;
