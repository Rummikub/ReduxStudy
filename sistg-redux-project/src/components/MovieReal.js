import React,{Fragment,useEffect} from "react";
import {fetchMovie} from "../actions/movieActions";
import {connect} from "react-redux"
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {NavLink} from "react-router-dom";

function MovieReal(props) {
    useEffect(()=>{
        props.fetchMovie(1,1);
    },[])
    const html=props.movies.map((m)=>
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
                {html}
        </React.Fragment>
    )
}

const mapStateToProps=state=>({
    movies:state.movies.movie
})

//<MovieReal movies={state.movies.movie}/>
export default connect(mapStateToProps,{fetchMovie})(MovieReal) //호출해서 값을 넣어주는 함수