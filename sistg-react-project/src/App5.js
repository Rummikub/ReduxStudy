import React,{useState,useEffect} from "react";
import axios from 'axios'
// useEffect = componentWillMount()를 대체
// useState = this.state={}를 대체
// <App5 movie={movie}/>
// render()
/*
        String js;
        public void data(String json)
        {
            js=json;
        }
        public void display()
        {

        }
 */
const H=()=>{
    const color=['lightblue','blue','green','lightgreen','purple']
    const no=parseInt(Math.random()*5);
    return(
        <h1 className={"text-center"} style={{"color":color[no]}}>주간 박스오피스</h1>
    )
}
// Java --> Singleton
const H1=React.memo(()=>{
    const color=['lightblue','blue','green','lightgreen','violet']
    const no=parseInt(Math.random()*5);
    return(
        <h1 className={"text-center"} style={{"color":color[no]}}>주간 박스오피스</h1>
    )
})
function App5(props) {
    /*var movie=[];
    axios.get('http://localhost:3000/weekly.json').then((result)=>{
        movie=[...result.data]
        console.log(result.data);
    })*/

    /*
         this.state={
            detail:{},
            show:false,
            movie:[]
        }
     */
    const [movie,setMovie]=useState([]);
    const [detail,setDetail]=useState({});
    const [show,setShow]=useState(false);
    useEffect(()=>{
        axios.get('http://localhost:3000/weekly.json').then((result)=> {
            setMovie(result.data)
        })
    })
    const onMovieChange=(m)=>{
        setDetail(m);
        setShow(true);
        // ==   this.setState({detail:m,show:true})
    }
    const html = movie.map((m, key) =>
        <div className="col-md-4" onClick={()=>onMovieChange(m)}>
            <div className="thumbnail">
                <img src={m.poster} alt="Lights" style={{"width": "100%"}}/>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )
    return (
        <div className={"row"}>
            <H1/>
            <div className={"col-sm-8"}>
                {html}
            </div>
            <div className={"col-sm-4"}>
                {show===true?<MovieDetail movie={detail}/>:null}
            </div>
        </div>
    )
}
function MovieDetail(props) {
    return(
        <table className={"table"}>
            <tr>
                <td rowSpan={"5"} width={"30%"} className={"text-center"}>
                    <img src={props.movie.poster} width={"100%"}/>
                </td>
                <td width={"70%"}>
                    <b>{props.movie.title}</b>
                </td>
            </tr>
            <tr>
                <td>감독:{props.movie.director}</td>
            </tr>
            <tr>
                <td>출연:{props.movie.actor}</td>
            </tr>
            <tr>
                <td>평점:{props.movie.score}</td>
            </tr>
            <tr>
                <td>장르:{props.movie.genre}
                </td>
            </tr>
            <tr>
                <td colSpan={"2"}>내용:{props.movie.story}</td>
            </tr>
        </table>
    )
}
export default App5;