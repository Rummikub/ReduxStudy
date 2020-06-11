import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {fetchNewsPop} from "../actions/movieActions";

export default function MovieNews(props) {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchNewsPop())
    },[])
    const data=useSelector(state=>state.movies.news_pop);
    const html=data.map((m)=>
        <table className={"table"}>
            <tbody>
            <tr>
                <td>
                    <a href={m.link}>{m.title}</a>
                </td>
            </tr>
            <tr>
                <td>
                    {m.content}
                </td>
            </tr>
            <tr>
                <td className={"text-right"}>
                    {m.author}
                </td>
            </tr>
            </tbody>

        </table>
    )
    return (
        <table className={"table"}>
            <tbody>
            <tr>
                <td>
                    {html}
                </td>
            </tr>
            </tbody>
        </table>
    )
}