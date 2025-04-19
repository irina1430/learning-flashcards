import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="/">
        <img src="../public/logo1.svg" alt="logo" />
      </a>
      <p>© 2025 English Learning App</p>
      <div className="footer__links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
}
