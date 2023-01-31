import { useEffect, useState } from "react";
import Card from "../Componant/Card";
import axios from "axios";
import { Link } from "react-router-dom";
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

    return (
        <div className=" bg-dark">
            <form className="d-flex w-50 pt-2 m-auto" role="search">
                <input className="form-control me-2" onChange={(e) => searchengine(e)} type="search" />
            </form>
            <div>
                {search.value}
            </div>
            <div className="row">
                {Movies.map((movie) => {
                    return (
                        <div className="col-2">
                            <Link to={`/show/${movie.id}`}>
                                <Card img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    name={movie.title} desc={movie.overview} />
                            </Link>
                        </div>
                    )
                })}
            </div>        </div>
    )
}
export default Home;