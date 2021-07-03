import { Container, Name, Username, Description } from "./styles";

const UserDetails = (props) => {
    return (
        <Container>
            <Name>{props.name}</Name>
            <Username>{props.login}</Username>
            <Description>{props?.description}</Description>
        </Container>
    );
};

export default UserDetails;
