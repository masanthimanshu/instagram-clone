import "./css/header.css";

export default function Header() {
  return (
    <section className="header ⚡-3">
      <div className="logo">
        <img src={"./images/logo.png"} alt="Logo" />
      </div>
      <div className="search">
        <form action="/" method="get">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="search" placeholder="Search" required />
          </div>
        </form>
      </div>
      <nav>
        <a href="#">
          <i className="fa-solid fa-house"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-facebook-messenger"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-square-plus"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-compass"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-heart"></i>
        </a>
        <a href="#">
          <i className="fa-solid fa-user"></i>
        </a>
      </nav>
    </section>
  );
}
