import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="./img/mablog.png" alt="" />
        </div>
        <div className="links">
          <Link to="/?cat=art" className="link">
            <h6>Art</h6>
          </Link>
          <Link to="/?cat=science" className="link">
            <h6>Science</h6>
          </Link>
          <Link to="/?cat=technology" className="link">
            <h6>technology</h6>
          </Link>
          <Link to="/?cat=cinema" className="link">
            <h6>cinema</h6>
          </Link>
          <Link to="/?cat=design" className="link">
            <h6>design</h6>
          </Link>
          <Link to="/?cat=food" className="link">
            <h6>food</h6>
          </Link>

          <span>m.afs</span>
          <span>logout</span>
          <span className="write">
            <Link to="/write" className="link">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
