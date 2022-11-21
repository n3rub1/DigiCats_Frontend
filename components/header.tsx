import React from "react";
import Image from "next/image";
import paw from "../public/paw.png";

export default function Header() {
  return (
    <header className="bg-clr-primary">
      <div className="left_header">
        <Image
          className="header_icon"
          alt="Image of a cats' paw"
          src={paw}
        ></Image>
        <p>Digicats</p>
      </div>
      <div className="right_header">
        <a href="\" className="register-header">Home</a>
        <a href="Register" className="register-header">About Us</a>
        <a href="Register" className="register-header">Register</a>
        <p className="login-header">Log In</p>
      </div>
    </header>
  );
}
