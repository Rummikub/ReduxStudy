import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {fetchDetail} from "../actions/movieActions";
//useDispatch => Action에 등록된 함수 호출
// useSelector => state중 필요한 데이터를 얻어오는 Hooks
export default function MovieDetail2(props){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchDetail(props.match.params.no))
    },[])
    const detail=useSelector(state=>state.movies.detail);
    return (
        <div className={"row"}>
            <h1 className={"text-center"}>{detail.title}</h1>
            <table className={"table"}>
                <tr>
                    <td width={"30%"} className={"text-center"} rowSpan={"5"}>
                        <img src={detail.poster} width={"100%"}/>
                    </td>
                </tr>
                <tr>
                    <td width={"70%"}>{detail.time}</td>
                </tr>
                <tr>
                    <td width={"70%"}>{detail.director}</td>
                </tr>
                <tr>
                    <td width={"70%"}>{detail.actor}</td>
                </tr>
                <tr>
                    <td width={"70%"}>{detail.genre}</td>
                </tr>
                <tr>
                    <td width={"70%"}>{detail.grade}</td>
                </tr>
                <tr>
                    <td colSpan={"2"}>
                        {detail.story}
                    </td>
                </tr>

            </table>
        </div>
    )

}