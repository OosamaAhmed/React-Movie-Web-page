import { useDispatch, useSelector } from "react-redux";

import {addToFavorites, removeFavorites} from "../Store/Action/Action";


function Card(props) {
  // const mySelector = useSelector((state) => state.Rfav.favorites);
  // const dispatch = useDispatch();
  // const myClick = () => {
  //   dispatch(addToFavorites(mySelector == "ADD" ? "REMOVE" : "ADD"));
  // };


  return (
    <div>
      {/* <button className="btn btn-warning" onClick={() => myClick()}>
        <i className="fa-regular fa-star"></i>
      </button> */}
    
{/* <h1>{mySelector}</h1> */}
      <div className="card text-center" >
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {props.name} </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
