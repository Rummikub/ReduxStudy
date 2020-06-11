import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Recipe from './components/Recipe'
import Chef from './components/Chef'
import RecipeNews from './components/RecipeNews'
import RecipeRecommend from './components/RecipeRecommend'
import Home from './components/Home'
import RecipeDetail from "./components/RecipeDetail";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <Header/>
      <div className={"container-fluid"}>
      <div className={"jumbotron"}>
        <Switch>
          {/*사이트 주소가 맞으면 그 JS파일이 실행됨*/}
          <Route exact path={"/"} component={Home}/>
          <Route path={"/recipe"} component={Recipe}/>
          <Route path={"/chef"} component={Chef}/>
          <Route path={"/recommend"} component={RecipeRecommend}/>
          <Route path={"/news"} component={RecipeNews}/>
          <Route path={"/detail/:no"} component={RecipeDetail}/>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
