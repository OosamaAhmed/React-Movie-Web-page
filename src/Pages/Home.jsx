import { useEffect, useState } from "react";
import Card from "../Componant/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../Store/Action/Action";

function Home() {


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

    const [search, setsearch] = useState("r")

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                query: search,
                api_key: "9b743af1d4fde1d65af33c40dcccce87"
            }
        })


            .then((data) => setMovies(data.data.results))
            .catch((err) => console.log(err))
    }, [search])

    const searchengine = (e) => {
        console.log(e.target.value)

        setsearch(e.target.value)
        e.preventDefault()

    }
// store====================================================================
  

    const mySelector = useSelector((state) => state.Rfav.favorites);
    const dispatch = useDispatch();
    const myClick = (movie) => {
        console.log(movie)
        // 
        dispatch(addToFavorites(movie.mySelector));
    };

    return (
        <div className=" container-fluid bg-dark">
            <form className="d-flex w-50 pt-2 m-auto" role="search">
                <input className="form-control me-2" onChange={(e) => searchengine(e)} type="search" />
            </form>
            <div>
                {search.value}
            </div>
            <div className="row">
                {Movies.map((movie) => {
                    return (
                        <div className="col-2 card m-1" style={{ width: "15rem" }}>
                           
                            <Card img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                name={<Link to={`/show/${movie.id}`}>
                                    {movie.title}
                                </Link>} desc={movie.overview} />
                            <button className="btn btn-warning" onClick={() => myClick(movie)}>
                                <i className="fa-regular fa-star"></i>
                            </button>
                            <p>{mySelector}</p>
                        </div>
                    )
                })}
            </div>        </div>
    )
}
export default Home;