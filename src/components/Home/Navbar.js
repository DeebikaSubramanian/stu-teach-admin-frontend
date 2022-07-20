import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const navigate=useNavigate();

  const deleteClick=async()=>
    {
        if(window.confirm('Are you sure to logout?'))
        {
        localStorage.clear();
        navigate("/");
        }
               
    }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* <NavLink exact to="/" className="nav-logo">
            CodeBucks
            <i className="fas fa-code"></i>
          </NavLink> */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          
            <li className="nav-item">
              <NavLink
                exact
                to="/teacherview"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                TeacherDetails
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/studentview"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                StudentDetails
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/questionview"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Quiz Questions
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/quiz"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Quiz
              </NavLink>
            </li>

            <li className="nav-item">
            <button type="submit" onClick={deleteClick} className="nav-links logoutBtn">Logout</button>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;