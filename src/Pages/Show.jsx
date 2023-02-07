import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Card from "../Componant/Card"

function Show(props) {

    // console.log(useParams())
    const [Movies, setMovies] = useState([])
    const params = useParams()
    // console.log(params)
    const Cid = params.id
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${Cid}`, {
            params: {
   
                api_key: "9b743af1d4fde1d65af33c40dcccce87"
            }
        })
        .then((data) => setMovies(data.data))
            .catch((err) => console.log(err))
    }, [])



    return (
        <div className="text-center bg-dark p-5">


<h1 className="text-light">{Movies.title}</h1>

<button className="btn btn-primary"> Add to Fav</button>
<hr className="text-light" />
<p className="text-light display-4">{Movies.overview}</p>
                <img src={`https://image.tmdb.org/t/p/w500/${Movies.backdrop_path}`} alt="osa" />






      </div>
            )
}


export default Show