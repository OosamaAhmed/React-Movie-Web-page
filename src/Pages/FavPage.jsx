import { useEffect, useState } from "react";
import Card from "../Componant/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../Store/Action/Action";

function FavPage() {


    const [Movies, setMovies] = useState([])


    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular", {
            params: {
                api_key: "9b743af1d4fde1d65af33c40dcccce87"
            }
        })
            .then((data) => setMovies(data.data.results))
            .catch((err) => console.log(err))
    }, [])


    const FavSelector = useSelector((state) => state.Rfav.favorites);
    const dispatch = useDispatch();
  console.log(FavSelector)
    dispatch(addToFavorites(Movies.FavSelector));

    return (

        
        <div className=" container-fluid bg-dark">

            <div className="row">
                {FavSelector.map((movie) => {
                    return (
                      <h1>
                        {movie.title}
                      </h1>  
                    )
                })}
            </div>        
            </div>
    )
}
export default FavPage;