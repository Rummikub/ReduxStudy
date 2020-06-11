import React from 'react';
import MovieMain2 from './components/MovieMain2'
import store from './store/store'
import {Provider} from "react-redux"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import MovieDetail2 from "./components/MovieDetail2"
import MovieNews from "./components/MovieNews"
import MovieDetail from "./components/MovieDetail";


function App() {
  return (
   <Router>
      <Provider store={store}>
        <div className={"container"}>
          <Switch>
            <Route exact path={"/"} component={MovieMain2}/>
            <Route path={"/movie_detail/:no"} component={MovieDetail2}/>
            <Route path={"/movie_news"} component={MovieNews}/>
          </Switch>
        </div>
      </Provider>
   </Router>
  );
}

export default App;
