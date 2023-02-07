import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
 

function Navbar(){
  const mySelector = useSelector((state) => state.Rfav.favorites);

// const mySelector = useSelector((state) => state.newfav.fav);
// const dispatch = useDispatch();




    return (
      <nav className="navbar navbar-expand-lg  bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand ps-2" to="/">
            {" "}
            <span className="navbar-toggler-icon"></span>
            Movies
          </Link>
        </div>

        <Link className="" to="/FavPage">
       
         
          <button className="btn btn-secondary">
          <i className="fa-solid fa-star"></i>
          <p>{mySelector.length}</p>
        </button>
        </Link>
       
        <button className="btn btn-primary m-2">login</button>
        <button className="btn btn-primary">sign </button>
      </nav>
    );
}

export default Navbar