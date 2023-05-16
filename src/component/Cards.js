import "./App.css";

function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img 
                className="contacts-image"
                src={props.img}
                alt="avatar_img"/>
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;