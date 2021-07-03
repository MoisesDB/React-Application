import { Container, ProfilePicture } from "./styles";

const UserPicture = (props) => {
    return (
        <Container>
            <ProfilePicture src={props.url} alt={props.alternativeText} />
        </Container>
    );
};

export default UserPicture;
