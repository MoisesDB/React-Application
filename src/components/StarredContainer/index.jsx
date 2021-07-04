import React, { useContext } from "react";
import "./styles.scss";
import { context } from "../../context";

const StarredContainer = () => {
  const ctx = useContext(context);
  const arrayStarred = ctx.starred;

  return (
    <section class="section">
      <h1>Starred de {ctx.userData.name?.split(" ")[0]}</h1>
      <div className="list-starred-container">
        {arrayStarred.map((starred) => (
          <div className="starred" key={starred.id}>
            <div className="d-flex">
              <h2 className="name">{starred.name}</h2>
            </div>
            <div className="description">{starred.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StarredContainer;
