import React, {useCallback, useEffect, useState} from "react";
import axios from 'axios'
export default function Chef(props){
    const [chef, setChef]=useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        axios.get('http://localhost:3355/chef_data',{
            params:{
                page:page
            }
        }).then((res)=>{
            setChef(res.data)
        })
    })
    useEffect(() => {
        axios.get('http://localhost:3355/total_data').then((result) => {
            setTotal(result.data.total)
        })
    }, [total])

    //이벤트 처리
    const onPrev=useCallback(()=>{
        //이전
        setPage(page>1?page-1:page);
        axios.get('http://localhost:3355/recipe_data', {
            params: {
                //?page=(현재페이지 -1)
                page: page
            }
        }).then((result) => {
            setChef(result.data)
        })
    },[page])

    const onNext=useCallback(()=>{
        //다음
        setPage(page<total?page+1:page);
        axios.get('http://localhost:3355/recipe_data', {
            params: {
                //?page=(현재페이지 +1)
                page: page
            }
        }).then((result) => {
            setChef(result.data)
        })
    },[page])

    const html=chef.map((m)=>
        <table className={"table"}>
            <tr>
                <td width={"30%"} rowSpan={"2"} className={"text-center"}>
                    <img src={m.poster} width={"70"} height={"70"} className={"img-circle"}/>
                </td>
                <td colSpan={"4"}><h3 style={{"color":"orange"}}>{m.chef}</h3></td>
            </tr>
            <tr>
                <td className={"text-center"}>
                    <img src={"/image/1.png"}/>{m.mem_cont1}
                </td>
                <td className={"text-center"}>
                    <img src={"/image/3.png"}/>{m.mem_cont3}
                </td>
                <td className={"text-center"}>
                    <img src={"/image/7.png"}/>{m.mem_cont7}
                </td>
                <td className={"text-center"}>
                    <img src={"/image/2.png"}/>{m.mem_cont2}
                </td>
            </tr>
        </table>
    )

    return (
        <React.Fragment>
        <div className={"row"} style={{"margin":"0px auto","width":"700px"}}>
            <table className={"table"}>
                <tr>
                    <td>
                        {html}
                    </td>
                </tr>
            </table>
        </div>
        <div className={"row text-center"}>
            <button className={"bten btn-lg btn-primary"} onClick={onPrev}>이전</button>
            {page} page/ {total} pages
            <button className={"bten btn-lg btn-success"}onClick={onNext}>다음</button>
        </div>
        </React.Fragment>
    )

}