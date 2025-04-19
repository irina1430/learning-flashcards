import React from "react";
import { Link } from "react-router-dom";
import "../Error/error.scss";

const Error = () => {
  return (
    <div className="error-page">
      <h2>404</h2>
      <p>Страница не найдена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default Error;
