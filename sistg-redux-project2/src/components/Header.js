import React,{Fragment} from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return(
        <Fragment>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to={"/"}>SIST FoodHouse</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink exact to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/pop"}>인기맛집</NavLink></li>
                            <li><NavLink to={"/recommend"}>추천맛집</NavLink></li>
                            <li><NavLink to={"/recipe"}>레시피</NavLink></li>
                            <li><NavLink to={"/news"}>맛집뉴스</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="jumbotron text-center">
                <h1>SIST 맛집</h1>
            </div>
        </Fragment>
    )
}

export default Header;