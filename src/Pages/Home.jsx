import { useEffect, useState } from "react";
import Card from "../Componant/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../Store/Action/Action";

function Home() {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/movie/popular", {
                params: {
                    api_key: "9b743af1d4fde1d65af33c40dcccce87",
                },
            })
            .then((data) => setMovies(data.data.results))
            .catch((err) => console.log(err));
    }, []);

    const [search, setsearch] = useState("r");

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    query: search,
                    api_key: "9b743af1d4fde1d65af33c40dcccce87",
                },
            })

            .then((data) => setMovies(data.data.results))
            .catch((err) => console.log(err));
    }, [search]);

    const searchengine = (e) => {
        console.log(e.target.value);

        setsearch(e.target.value);
        e.preventDefault();
    };
    // store====================================================================

    const mySelector = useSelector((state) => state.Rfav.favorites);
    const dispatch = useDispatch();
    const myClick = (movie) => {
        // console.log(movie)
        //
        dispatch(addToFavorites(movie));
    };

    return (
        <div className="container-fluid bg-dark">
            <form className="d-flex w-50 pt-2 m-auto" role="search">
                <input
                    className="form-control m-4"
                    onChange={(e) => searchengine(e)}
                    type="search"
                />
            </form>
            <div>{search.value}</div>
            <div className="row d-flex justify-content-center m-0">
                {Movies.map((movie) => {
                    return (
                        <div className=" col-lg-2 col-sm-12 card m-2 p-0">
                   <div className="w-100 m-0" style={{height: "250px"}}>


                                <Card
                                    img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    name={<Link to={`/show/${movie.id}`} style={{  textDecoration: 'none' , fontWeight:"bold"}}>{movie.title}</Link>}
                                    desc={movie.overview}
                                />
</div>
                           <button
                                className="btn btn-warning m-auto"
                                onClick={() => myClick(movie)}
                            >
                                <i className="fa-regular fa-star"> </i> Add To Favourites</button> 

                        </div>
                    );
                })}
            </div>{" "}
        </div>
    );
}
export default Home;
