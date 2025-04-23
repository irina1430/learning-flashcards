import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="/">
        <img src="../public/logo1.svg" alt="logo" />
      </a>
      <p>© 2025 Easy Words</p>
      <div className="footer__links">
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Контакты</a>
      </div>
    </footer>
  );
}
