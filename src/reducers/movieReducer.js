import {FETCH_MOVIE, FETCH_DETAIL, FETCH_NEWS} from "../actions/types";

//VO
const initialState={
    movie:[],
    detail:{},
    news:[]
}
/*
        스프레드 연산자 (...)
        const a=[1,2,3];
        const b=[...a] ; ==> b=[1,2,3] ; copying
        const c=[4,5,...a]
 */
export default function(state=initialState,action){
    switch (action.type) {
        case FETCH_MOVIE:
            return{
                ...state,
                movie:action.payload
            }
        case FETCH_DETAIL:
            return{
                ...state,
                detail:action.payload
            }
        case FETCH_NEWS:
            return{
                ...state,
                news:action.payload
            }
        default:
            return state;
    }
}