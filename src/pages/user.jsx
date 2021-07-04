import React, { useContext } from "react";
import Container from "../components/Container";
import UserContainer from "../components/UserContainer";
import UserPicture from "../components/UserPicture";
import UserDetails from "../components/UserDetails";
import UserNumbers from "../components/UserNumbers";
import FollowersContainer from "../components/FollowersContainer";
import FollowingContainer from "../components/FollowingContainer";
import StarredContainer from "../components/StarredContainer";
import { context } from "../context";
import ReposContainer from "../components/ReposContainer";
import { Route } from "react-router";
import { useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "../components/SearchCard/styles.scss";

export default function Home() {
  const ctx = useContext(context);
  const history = useHistory();

  return (
    <Container>
      <button className="go-back-button" onClick={() => history.push("/")}>
        <BiArrowBack /> Voltar
      </button>
      <UserContainer>
        <React.Fragment>
          <UserPicture
            url={ctx.userData?.avatar_url}
            alternativeText={ctx?.userData.login}
          />
          <UserDetails
            name={ctx.userData?.name}
            login={ctx?.userData.login}
            description={ctx.userData?.bio}
          />
          <UserNumbers
            repos={ctx.userData?.public_repos}
            starred={ctx.starred.length}
            followers={ctx.userData?.followers}
            following={ctx.userData?.following}
          />
        </React.Fragment>
        <Route path="/repos">
          <ReposContainer />
        </Route>
        <Route path="/starred">
          <StarredContainer />
        </Route>
        <Route path="/followers">
          <FollowersContainer />
        </Route>
        <Route path="/following">
          <FollowingContainer />
        </Route>
      </UserContainer>
    </Container>
  );
}
