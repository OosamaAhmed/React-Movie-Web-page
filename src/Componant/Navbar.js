import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
 

function Navbar(){
  const mySelector = useSelector((state) => state.Rfav.favorites);
// console .log(mySelector)


    return (
      <nav className="navbar navbar-expand-lg  bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand ps-2" to="/">
            <span className="navbar-toggler-icon"></span>
            Movies
          </Link>
        </div>
        <i className="fa-solid fa-star"></i>
        <Link className="" to={`/FavPage/`}>
          <button className="m-0  btn btn-warning m-1">
            {mySelector.length}
          </button>
        </Link>
        <button className="btn btn-primary m-1">login</button>
        <button className="btn btn-primary m-1">sign </button>
      </nav>
    );
}
export default Navbar