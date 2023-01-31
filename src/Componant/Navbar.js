import { Link } from "react-router-dom"

function Navbar(){


    return (
      <nav className="navbar navbar-expand-lg  bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand ps-2" to="/">
            {" "}
            <span className="navbar-toggler-icon"></span>
            Movies
          </Link>
        </div>
        <button className="btn btn-primary m-2">login</button>
        <button className="btn btn-primary">sign </button>
      </nav>
    );
}

export default Navbar