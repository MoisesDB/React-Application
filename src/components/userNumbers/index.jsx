import React from "react";
import { useHistory } from "react-router-dom";
import {
    Container,
    NumberContainer,
    NumberFollowers,
    TextNumbers,
} from "./styles";

const UserNumbers = (props) => {
    const history = useHistory();
    const handleOnClick = (route) => history.push(route);

    return (
        <Container>
            <NumberContainer onClick={() => handleOnClick("/repos")}>
                <NumberFollowers>{props.repos}</NumberFollowers>
                <TextNumbers>Repositórios</TextNumbers>
            </NumberContainer>
            <NumberContainer onClick={() => handleOnClick("/followers")}>
                <NumberFollowers>{props.followers}</NumberFollowers>
                <TextNumbers>Seguidores</TextNumbers>
            </NumberContainer>
            <NumberContainer>
                <NumberFollowers onClick={() => handleOnClick("/following")}>
                    {props.following}
                </NumberFollowers>
                <TextNumbers>Seguindo</TextNumbers>
            </NumberContainer>
        </Container>
    );
};

export default UserNumbers;
