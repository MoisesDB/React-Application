import React, { useContext } from "react";
import { context } from "../../context";
import CircleAvatar from "../CircleAvatar";
import "./styles.scss";

const FollowersContainer = () => {
  const ctx = useContext(context);
  const arrayFollowers = ctx.followers;

  return (
    <div className="followers-container">
      <div className="list-followers-container">
        {arrayFollowers.map((follower) => (
          <div className="followers" key={follower.id}>
            <div className="avatar-container">
              <CircleAvatar url={follower?.avatar_url} />
            </div>
            <div className="name-container">
              <h2>{follower?.login}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowersContainer;
