import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../actions/movieActions";
import {NavLink} from "react-router-dom";


function MovieReal2(props){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchMovie(1,1));
    },[])
    /*
            deps X => componentDidMount(), componentDidUpdate works <==>
            deps O => componentDidMount()
     */
    const data=useSelector(state=>state.movies.movie);
    const html=data.map((m)=>
        <div className={"col-md-4"}>
            <div className="thumbnail">
                <NavLink to={"/movie_detail/"+m.no}>
                    <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                </NavLink>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )
    return(
        <React.Fragment>
            <h1 className={"text-center"}>현재상영영화</h1>
            <p>
                <NavLink to={"/movie_news"} className={"btn btn-sm btn-success"}>영화 뉴스</NavLink>
            </p>
            {html}
        </React.Fragment>
    )
}
export default MovieReal2;