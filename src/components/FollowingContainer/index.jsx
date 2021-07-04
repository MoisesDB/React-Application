import React, { useContext } from "react";
import { context } from "../../context";
import CircleAvatar from "../CircleAvatar";
import "./styles.scss";

const FollowingContainer = () => {
  const ctx = useContext(context);
  const arrayFollowing = ctx.following;
  return (
    <div className="following-container">
      <div className="list-following-container">
        {arrayFollowing.map((following) => (
          <div className="following" key={following.id}>
            <div className="avatar-container">
              <CircleAvatar url={following?.avatar_url} />
            </div>
            <div className="name-container">
              <h2>{following?.login}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowingContainer;
