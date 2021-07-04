import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const UserNumbers = (props) => {
  const history = useHistory();
  const handleOnClick = (route) => history.push(route);

  return (
    <div className="section-numbers">
      <div className="number-container" onClick={() => handleOnClick("/repos")}>
        <h2 className="number">{props.repos}</h2>
        <div className="text-number">Repositórios</div>
      </div>
      <div
        className="number-container"
        onClick={() => handleOnClick("/starred")}
      >
        <h2 className="number">{props.starred}</h2>
        <div className="text-number">Starred</div>
      </div>
      <div
        className="number-container"
        onClick={() => handleOnClick("/followers")}
      >
        <h2 className="number">{props.followers}</h2>
        <div className="text-number">Seguidores</div>
      </div>
      <div
        className="number-container"
        onClick={() => handleOnClick("/following")}
      >
        <h2 className="number">{props.following}</h2>
        <div className="text-number">Seguindo</div>
      </div>
    </div>
  );
};

export default UserNumbers;
