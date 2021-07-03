import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});
    const [followers, setFollowers] = useState({});

    return (
        <context.Provider
            value={{
                userData,
                setUserData,
                repos,
                setRepos,
                followers,
                setFollowers,
            }}
        >
            {props.children}
        </context.Provider>
    );
};
