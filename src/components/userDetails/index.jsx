import "./styles.scss";

const UserDetails = (props) => {
  return (
    <div className="details-container">
      <h1>{props.name}</h1>
      <h2>{props.login}</h2>
      <p>{props?.description}</p>
    </div>
  );
};

export default UserDetails;
