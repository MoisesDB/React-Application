import React, { useState, useContext } from "react";
import GithubLogin from "react-github-login";
import { FiSearch } from "react-icons/fi";
import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton,
} from "./styles";
import client from "../../services/client";
import { context } from "../../context";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const Header = () => {
    const history = useHistory();
    function handleOnClick(route) {
        getUserData(route);
    }

    const ctx = useContext(context);
    //searchedValue saves the value and setSearchedValue change the value
    const [searchedValue, setSearchedValue] = useState("");

    //get user from api
    async function getToken(code) {
        try {
            const response = await client.post(
                `http://localhost:3001/token/${code}`
            );

            const token = response.data.response.slice(13, 53);

            localStorage.setItem("token", token);

            console.log(token);
            handleOnClick("/user");
            return token;
        } catch (error) {
            console.log(error);
        }
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
                    console.log(res.data);
                    return ctx.setFollowers(res.data);
                });
        } catch (error) {}
    }

    async function getUserData(route) {
        const token = localStorage.getItem("token");
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
                    console.log(res.data);
                    ctx.setUserData(res.data);
                    return history.push(route);
                });
        } catch (error) {
            alert("Usuário não encontrado");
        }
    }

    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                {/* captures the event and saves it into the variable "e"*/}

                <HeaderInput
                    value={searchedValue}
                    onChange={(e) => setSearchedValue(e.target.value)}
                />
                <GithubLogin
                    className="header-search"
                    clientId="1167affef98c6e1cad24"
                    redirectUri="http://localhost:3000/login"
                    onSuccess={async (response) =>
                        await getToken(response.code)
                    }
                    onFailure={(response) => alert(response)}
                    buttonText=" "
                >
                    <FiSearch size={15} />
                </GithubLogin>
            </HeaderInputContainer>
        </HeaderSection>
    );
};

export default Header;
