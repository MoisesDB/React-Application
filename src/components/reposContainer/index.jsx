import React, { useContext } from "react";
import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    Name,
    Description,
} from "./styles";
import { context } from "../../context";

const ReposContainer = () => {
    const ctx = useContext(context);
    const arrayRepos = ctx.repos;
    arrayRepos.map((m) => console.log(m.name));

    return (
        <Section>
            <Title>Repositórios de {ctx.userData.name?.split(" ")[0]}</Title>
            <ListOfReposContainer>
                {arrayRepos.map((repo) => (
                    <Repo
                        key={repo?.id}
                    >
                        <Name>{repo?.name}</Name>
                        <Description>{repo?.description}</Description>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
};

export default ReposContainer;
