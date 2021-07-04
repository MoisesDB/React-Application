import React, { useContext } from "react";

import "./styles.scss";
import { context } from "../../context";

const ReposContainer = () => {
  const ctx = useContext(context);
  const arrayRepos = ctx.repos;

  return (
    <section className="section-repos">
      <h1>Repositórios de {ctx.userData.name?.split(" ")[0]}</h1>
      <div className="list-repos-container">
        {arrayRepos.map((repo) => (
          <div className="repos" key={repo?.id}>
            <h2>{repo?.name}</h2>
            <p>{repo?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReposContainer;
