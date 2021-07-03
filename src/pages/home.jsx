import React, { useContext } from "react";
import Container from "../components/container";
import Header from "../components/header";
import UserContainer from "../components/userContainer";
import UserPicture from "../components/userPicture";
import UserDetails from "../components/userDetails";
import UserNumbers from "../components/userNumbers";
import ReposContainer from "../components/reposContainer";
import { context } from "../context";

export default function Home() {
    const ctx = useContext(context);
    return (
        <Container>
            <Header />
        </Container>
    );
}
