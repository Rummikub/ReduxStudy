import React from "react";
import {FETCH_MOVIE,FETCH_DETAIL,FETCH_NEWS,FETCH_NEWS_POP} from "./types";
import axios from 'axios'
/*
 React --> Action Function --> Save : reducer(state) -- setState() --> render()x

 React ==> Reducer            ==> React
    dispatch                  state (subscribe)*
   JSP ==> Model(@Controller) ==> JSP
    DispatcherServlet request  -> jsp
                      ======== ViewResolver(send request to JSP)
                      model.addAttribute()                    */
export const fetchMovie=(page,type)=>dispatch=>{
    axios.get('http://localhost:3355/movie_data',{
        params:{
            page:page,
            type:type
        }
    }).then(movies=>dispatch({
            type:FETCH_MOVIE,
        payload:movies.data
    }))
}
export const fetchDetail=(no)=>dispatch=>{
    axios.get('http://localhost:3355/movie_detail',{
        params:{
            no:no
        }
    }).then(movies=>dispatch({
        type:FETCH_DETAIL,
        payload:movies.data[0] //because movie-server send data into Array ... {} - VO of No.0
    }))
}
/*      function fetchNews(fd){
            dispatch(){
            }
        }                    */
export const fetchNews=()=>dispatch=>{
    axios.get('http://localhost:3355/movie_news').then(news=>dispatch({
        type:FETCH_NEWS,
        payload:news.data
    }))
}

export const fetchNewsPop=()=>dispatch=>{
    axios.get('http://localhost:335/movie_news_pop').then(news_pop=>dispatch({
        type:FETCH_NEWS_POP,
        payload:news_pop.data
    }))
}