import { useEffect, useState } from "react";
import Card from "../Componant/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites ,removeFavorites } from "../Store/Action/Action";
import { useParams } from "react-router-dom"

function FavPage() {


    const [Movies, setMovies] = useState([])


    useEffect(() => {
        setMovies(FavSelector)
        // console.log(Movies)
    })


    const FavSelector = useSelector((state) => state.Rfav.favorites);
    const dispatch = useDispatch();
    //   console.log(FavSelector)
    console.log("FavSelector")


    const removeSelector = useSelector((state) => state.Rfav.favorites);
    const removedispatch = useDispatch();
    const myremClick = () => {
        
        removedispatch(removeFavorites());
    };



    return (
        <div className=" container-fluid bg-dark">
            <div className="row">
                {Movies.map((movie) => {
                    return (
                        <div className="col-2 card m-3 p-0" style={{ width: "17rem" }}>

                            <Card img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                name={<Link to={`/show/${movie.id}`}>
                                    {movie.title}
                                </Link>} desc={movie.overview} />

                            {/* rempove from fav */}

                            <button
                                className="btn btn-warning m-auto"
                                onClick={() => myremClick()} > Remove</button> 
                        </div>
                    )
                })}
            </div>        
            </div>
    )
}
export default FavPage;