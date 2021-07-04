import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState({});
  const [followers, setFollowers] = useState({});
  const [following, setFollowing] = useState({});
  const [starred, setStarred] = useState({});
  const [userLogged, setUserLogged] = useState({});

  return (
    <context.Provider
      value={{
        userData,
        setUserData,
        repos,
        setRepos,
        followers,
        setFollowers,
        following,
        setFollowing,
        starred,
        setStarred,
        userLogged,
        setUserLogged,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
