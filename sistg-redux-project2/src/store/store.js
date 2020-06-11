import{createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";                      // 비동기화 플젝 짤 때 부르는 라이브러리
import rootReducer from '../reducers'
import {createLogger} from "redux-logger/src";       // foods:foodReducer 호출

/*
[Store] : 전역변수 개념으로 생각하면 됨. <-------News.js
- action                                     [Store]
- reducer                           오히려 전역변수로 값을 보내서 변경값을 처리하는 편이 효율적
- state                            <-------Recipe.js
                                            [Store]
 */
const logger=createLogger();
const initialState={}

const middleware=[thunk,logger];

const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
)
export default store;