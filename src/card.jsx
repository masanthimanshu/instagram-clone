import "./css/card.css";

export default function Card(props) {
  return (
    <section className="center">
      <br />
      <section className="card">
        <div className="details">
          <div className="image">
            <img src={"./images/user.png"} alt="User" />
          </div>
          <div className="name">
            <span className="user-name">{props.name}</span> <br />
          </div>
        </div>
        <img src={props.img} alt="Pokemon" />
        <div className="bottom-sec">
          <div>
            <span><i className="fa-regular fa-heart"></i></span>
            <span><i className="fa-regular fa-comment"></i></span>
            <span><i className="fa-regular fa-paper-plane"></i></span>
          </div>
          <div>
            <span><i className="fa-regular fa-bookmark"></i></span>
          </div>
        </div>
      </section>
    </section>
  );
}
