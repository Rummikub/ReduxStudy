import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {FETCH_CATEGORY} from "../actions/types";
import axios from 'axios'
import {NavLink} from "react-router-dom";

export default function Home(props) {  // 값을 받아와서 출력해야하니까 props 필요
    const dispatch=useDispatch();
    //componentWillMount()
    useEffect(()=>{
        axios.get('http://localhost:3355/category').then((result)=>{
            dispatch({
                type:FETCH_CATEGORY,
                payload:result.data
            })
        })
    },[])
    /*
    <div class="col-md-4">
      <div class="thumbnail">
      <a href="/w3images/lights.jpg">
        <img src="/w3images/lights.jpg" alt="Lights" style="width:100%">
        <div class="caption">
          <p>Lorem ipsum...</p>
        </div>
      </a>
    </div>
     */
    const cate_data=useSelector(state=>state.foods.category)
    const html=cate_data.map((m)=>
        <div className="col-md-3">
            <div className="panel panel-default">
                <div className="panel-heading">{m.title}
                    <br/>
                    <sub>{m.subject}</sub>
                </div>
                <div className="panel-body">
                    <div className="thumbnail">
                        <NavLink to={"/cate_food/"+m.cateno}>
                         <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
    return(
        <div className={"row text-center"}>
            <h1>믿고 보는 맛집 리스트</h1>
            {html}
        </div>
    )
}