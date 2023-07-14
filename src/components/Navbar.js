import React from "react";
import PropTypes from "prop-types";
// {`${props.mode}`}
export default function Navbar(props) {
  return (
    <nav className={`${props.mode}`}>
      <ul>
        <li>
          <a href="#" style={{color: props.mode ==="ligthTheme"?"black":"white"}}>{props.Name}</a>
        </li>
        <li>
          <a href="#" style={{color: props.mode ==="ligthTheme"?"black":"white"}}>{props.Home}</a>
        </li>
      </ul>
      

      <div className="modebtn-Container" >
        <p style={{color: props.mode ==="ligthTheme"?"black":"white"}} className="modeText">Dark Mode</p>
        <label className="switch">
          <input type="checkbox" onClick={props.toggleMode}/>
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
}

// propTypes
Navbar.propTypes = {
  Home: PropTypes.string,
  About: PropTypes.string,
};

// Navbar.propTypes = {
//     Home: PropTypes.string.isRequired
//   }

// Default Props
// Navbar.defaultProps = {
//     Home:'Home',
//     About: 'About'
//   }
