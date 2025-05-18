import { Link } from "react-router-dom";
import smallLogo2 from '../assets/images/smallLogo2.jpg';
import './nav.css';
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <div className="mx-auto">
            <Link className="navbar-brand" to="/">
              <img src={smallLogo2} alt="לוגו" height="90" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">{'home |'}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Abaut">{'abaut |'}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Receipes">{'receipes |'}</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Special">{'special |'}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BakingOven">{'bakingOven '}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}