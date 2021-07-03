import "./styles.scss";

const CircleAvatar = (props) => {
    return (
        <div className="avatar-container">
            <img src={props.url} alt={props.alternativeText} />
        </div>
    );
};

export default CircleAvatar;
