import React, { useState, useContext, useEffect } from "react";
import GithubLogin from "react-github-login";
import { FiSearch } from "react-icons/fi";
import client from "../../services/client";
import { context } from "../../context";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const SearchCard = () => {
  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState(
    localStorage.getItem("token") ?? undefined
  );
  const history = useHistory();

  function handleOnClick(route) {
    getUserData(route);
  }

  const ctx = useContext(context);
  const [searchedValue, setSearchedValue] = useState("");

  async function getToken(code) {
    try {
      const response = await client.post(`http://localhost:3333/token/${code}`);

      const token = response.data.response.slice(13, 53);

      localStorage.setItem("token", token);
      setToken(token);

      return token;
    } catch (error) {}
  }

  async function getUserRepos(login) {
    const token = localStorage.getItem("token");
    try {
      return await client
        .get(`https://api.github.com/users/${login}/repos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          return ctx.setRepos(res.data);
        });
    } catch (error) {
      alert("Repositório não encontrado");
    }
  }

  async function getUserFollowers(login) {
    const token = localStorage.getItem("token");
    try {
      return await client
        .get(`https://api.github.com/users/${login}/followers`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          return ctx.setFollowers(res.data);
        });
    } catch (error) {}
  }

  async function getUserFollowing(login) {
    const token = localStorage.getItem("token");
    try {
      return await client
        .get(`https://api.github.com/users/${login}/following`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          return ctx.setFollowing(res.data);
        });
    } catch (error) {}
  }

  async function getUserStarred(login) {
    const token = localStorage.getItem("token");
    try {
      return await client
        .get(`https://api.github.com/users/${login}/starred`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          return ctx.setStarred(res.data);
        });
    } catch (error) {}
  }

  async function getUserLogged() {
    try {
      return await client
        .get(`https://api.github.com/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          return ctx.setUserLogged(res.data);
        });
    } catch (error) {}
  }

  useEffect(() => {
    if (!!token) {
      console.log(ctx.userLogged);
      getUserLogged();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  async function getUserData(route) {
    const token = localStorage.getItem("token");
    setLoading(true);
    try {
      return await client
        .get(`/${searchedValue}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (res) => {
          await getUserRepos(res.data.login);
          await getUserFollowers(res.data.login);
          await getUserFollowing(res.data.login);
          await getUserStarred(res.data.login);

          ctx.setUserData(res.data);
          setLoading(false);
          return history.push(route);
        });
    } catch (error) {
      setLoading(false);
      alert("Usuário não encontrado");
    }
  }

  return (
    <section className="section-card">
      <header className="header-container">
        {!!token ? (
          <>
            <h6>
              <span>Bem Vindo, {ctx.userLogged.login}</span>
            </h6>
            <button
              className="login-button"
              onClick={() => {
                localStorage.removeItem("token");
                return setToken(undefined);
              }}
            >
              LogOut
            </button>
          </>
        ) : (
          <GithubLogin
            className="login-button"
            clientId="1167affef98c6e1cad24"
            redirectUri="http://localhost:3000/login"
            onSuccess={async (response) => await getToken(response.code)}
            onFailure={(response) => alert(response)}
            buttonText="Login With Github"
          />
        )}
      </header>
      <h1>Github Profile</h1>
      <div className="input-container">
        {loading ? (
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            {!!token ? (
              <>
                <input
                  className="input"
                  value={searchedValue}
                  onChange={(e) => setSearchedValue(e.target.value)}
                />
                <button
                  className="search"
                  onClick={() => handleOnClick("/user")}
                >
                  <FiSearch size={15} />
                </button>
              </>
            ) : (
              <h2>Você precia fazer login</h2>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SearchCard;
