import React,{useEffect} from "react";
import {fetchDetail} from "../actions/movieActions";
// get state  from reducer.js
import {connect} from 'react-redux'
function MovieDetail(props){

    useEffect(()=>{
        // 1 ) send Data
        props.fetchDetail(props.match.params.no);
    },[])

    // 3 ) Print Data
    return (
        <div className={"row"}>
           <h1 className={"text-center"}>{props.detail.title}</h1>
            <table className={"table"}>
                <tr>
                    <td width={"30%"} className={"text-center"} rowSpan={"5"}>
                        <img src={props.detail.poster} width={"100%"}/>
                    </td>
                </tr>
                <tr>
                    <td width={"70%"}>{props.detail.director}</td>
                </tr>
                <tr>
                    <td width={"70%"}>{props.detail.actor}</td>
                </tr>
                <tr>
                    <td width={"70%"}>{props.detail.genre}</td>
                </tr>
                <tr>
                    <td width={"70%"}>{props.detail.grade}</td>
                </tr>
                <tr>
                    <td colSpan={"2"}>
                        {props.detail.story}
                    </td>
                </tr>

            </table>
        </div>
    )
}
// 3 ) Read Data (+ convert state to props)
const mapStateToProps=state=>({
    detail:state.movies.detail
})
// 2 ) Call fetchDetail(Data function)  ==> like <MovieDetail detail={state.movies.detail}/>
export default connect(mapStateToProps,{fetchDetail})(MovieDetail)