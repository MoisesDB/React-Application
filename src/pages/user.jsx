import React, { useContext } from "react";
import Container from "../components/container";
import UserContainer from "../components/userContainer";
import UserPicture from "../components/userPicture";
import UserDetails from "../components/userDetails";
import UserNumbers from "../components/userNumbers";
import { context } from "../context";
import ReposContainer from "../components/reposContainer";
import FollowersContainer from "../components/FollowersContainer";
import { Route } from "react-router";

export default function Home() {
    const ctx = useContext(context);
    console.log(ctx);

    return (
        <Container>
            <UserContainer>
                <React.Fragment>
                    <UserPicture
                        url={ctx.userData?.avatar_url}
                        alternativeText={ctx?.login}
                    />
                    <UserDetails
                        name={ctx.userData?.name}
                        login={ctx?.login}
                        description={ctx.userData?.bio}
                    />
                    <UserNumbers
                        repos={ctx.userData?.public_repos}
                        followers={ctx.userData?.followers}
                        following={ctx.userData?.following}
                    />
                </React.Fragment>
                <Route path="/repos">
                    <ReposContainer />
                </Route>
                <Route path="/followers">
                    <FollowersContainer />
                </Route>
            </UserContainer>
        </Container>
    );
}
