import React, { useState } from "react";
// import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const cates = [
    { id: 1, title: "Our story", link: "about" },
    { id: 2, title: "Membership", link: "membership" },
    { id: 3, title: "Write", link: "write" },
    { id: 4, title: "Sign In", link: "signin" },
    { id: 5, title: "Get started", link: "#" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">Logo</div>
          <div className="navbar-menu" onClick={() => setIsOpen(!isOpen)}>
            <div className={`navbar-menu-bar ${isOpen ? "change" : ""}`} />
            <div className={`navbar-menu-bar ${isOpen ? "change" : ""}`} />
            <div className={`navbar-menu-bar ${isOpen ? "change" : ""}`} />
          </div>
          <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
            {cates.map((cate) => (
              <li key={cate.id}>
                <a href={cate.link}>{cate.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
