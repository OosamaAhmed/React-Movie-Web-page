import { useEffect, useState } from "react";
import Card from "../Componant/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../Store/Action/Action";
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




    return (
        <div className=" container-fluid bg-dark">
            
          
            <div className="row">
                {Movies.map((movie) => {
                    return (
                        <div className="col-2 card m-1" style={{ width: "15rem" }}>

                            <Card img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                name={<Link to={`/show/${movie.id}`}>
                                    {movie.title}
                                </Link>} desc={movie.overview} />
                           
                        </div>
                    )
                })}
            </div>        </div>
    )
    // return (  

        
    //     <div className=" container-fluid bg-dark">
    //         <h1 className="text-light">fav page</h1>
    //         <div className="row">
            
    //             {Movies.map((movie) => {
    //                 return (<h1>  {movie.id} </h1>  
    //                 )
    //             })}
    //         </div>        
    //         </div>
    // )
}
export default FavPage;