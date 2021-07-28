import React from "react";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Nav-logo"><a href="/"><img src="Images/logo.svg"></img></a></div>
      <div className="Nav-cont">
        <a className="Navbar-1" href="/">
          <span><ExploreTwoToneIcon className="Navbar-explore" /></span>
          <span className="Navbar-text">Explore</span>
        </a>
        <a className="Navbar-2" href="/about">
          <span><PersonOutlineTwoToneIcon className="Navbar-panel" /></span>
          <span className="Navbar-text">About</span>
        </a>
      </div>
    </div>
  );
}
