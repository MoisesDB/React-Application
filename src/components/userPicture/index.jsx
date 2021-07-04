import "./styles.scss";

const UserPicture = (props) => {
  return (
    <figure className="picture-container">
      <img
        className="profile-picture"
        src={props.url}
        alt={props.alternativeText}
      />
    </figure>
  );
};

export default UserPicture;
