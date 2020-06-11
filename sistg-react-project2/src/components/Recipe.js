import React,{useState,useEffect,useCallback} from "react";
import axios from 'axios'
import {NavLink} from "react-router-dom"
/*
    useEffect => 서버나 파일을 읽어오는 역할
    useState  => 읽어온 파일을 저장
 */
export default function Recipe(props) {
    //변수명,setXxx
    const [recipe, setRecipe] = useState([]);
    const [page, setPage] = useState(1); //초기값
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3355/recipe_data', {
            params: {
                //?page=1
                page: page
            }
        }).then((result) => {
            setRecipe(result.data)
        })
    }, [recipe])

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
            setRecipe(result.data)
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
            setRecipe(result.data)
        })
    },[page])
    //render()
    const html=recipe.map((m)=>

            <div className="col-md-3">
                <div className="thumbnail">
                        <NavLink to={"/detail/"+m.no}>
                        <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                        </NavLink>
                            <div className="caption">
                                <p style={{"fontSize":"9pt"}}>{m.title}</p>
                                <sub style={{"color":"gray"}}>{m.chef}</sub>
                            </div>
                </div>
            </div>
    )
    return (
        <React.Fragment>
            <div className={"row"}>
                {html}
            </div>
            <div className={"row text-center"}>
                <button className={"bten btn-lg btn-primary"} onClick={onPrev}>이전</button>
                {page} page/ {total} pages
                <button className={"bten btn-lg btn-success"}onClick={onNext}>다음</button>
            </div>
        </React.Fragment>
    )
}



