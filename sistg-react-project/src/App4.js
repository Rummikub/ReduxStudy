import React,{Component} from "react";
import axios from 'axios'

//[] => List (Array)  ==> movie
//{} => VO  (Object)  ==> m
// var s="" => String형
class App4 extends Component{
    constructor(props) {
        super(props);
        this.state={
            detail:{},
            show:false,
            movie:[]
        }
    }
    //이벤트 (클릭)
    onMovieChange(m)
    {
        this.setState({detail:m,show:true})
    }
    //화면출력 - props에서 받은 값을 밑에서 출력만 하면 됨
    // Key를 가져와야 함 (movie)  {m < 임의로 주고  key < 변수명}
    componentWillMount() {
        axios.get('http://localhost:3000/weekly.json').then((result)=>{
            this.setState({movie:result.data})
        })
    }

    render() {
        const html=this.state.movie.map((m,key)=>
            <div className="col-md-4" onClick={this.onMovieChange.bind(this,m)}>
                <div className="thumbnail">
                        <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                            <div className="caption">
                                <p>{m.title}</p>
                            </div>
                </div>
            </div>
        )
        return(
            <div className={"row"}>
                <div className={"col-sm-8"}>
                    {html}
                </div>
                <div className={"col-sm-4"}>
                    {this.state.show==true?<MovieDetail movie={this.state.detail}/>:null}
                </div>
            </div>
        )

    }
}
class MovieDetail extends Component{
    render() {
        return(
            <table className={"table"}>
                <tr>
                    <td rowSpan={"5"} width={"30%"} className={"text-center"}>
                        <img src={this.props.movie.poster} width={"100%"}/>
                    </td>
                    <td width={"70%"}>
                        <b>{this.props.movie.title}</b>
                    </td>
                </tr>
                <tr>
                    <td>감독:{this.props.movie.director}</td>
                </tr>
                <tr>
                    <td>출연:{this.props.movie.actor}</td>
                </tr>
                <tr>
                    <td>평점:{this.props.movie.score}</td>
                </tr>
                <tr>
                    <td>장르:{this.props.movie.genre}
                    </td>
                </tr>
                <tr>
                    <td colSpan={"2"}>내용:{this.props.movie.story}</td>
                </tr>
            </table>
        )
    }
}

export default App4;