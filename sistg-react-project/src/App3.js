import React,{Component,Fragment} from "react";
//생명주기<App3>
//props => name, sex, age의 value를 여기서 받는다
//props = 불변 | state = 가변
/* 변수는 위에 저게 다고, 변수를 정의해줄 땐 다음처럼 하면 된다.
    this.state={
        page:1,
        data:[].
        detail:{}                   => setState(~)로 호출
    }
   constructor => componentWillMount => render => componentDidMount
               => 이벤트 발생 (페이지 클릭) => setState() => render() (Ajax)
                                        ============= 
                                         데이터 변경시 화면에 출력
                                         => re-rendering
 */
export default class App3 extends Component{

    constructor(props) {
        super(props);
        console.log("constructor(props)")   //System.out.println()
        /*
           생성자 함수 App3(){}
           없는 경우에는 => 자동생성 되는 것
           this.state
           이벤트 등록
         */
        this.state={
            name:''
        }
        //이벤트 등록하는 법 (이름은 아무거나 줘도 됨)
        this.nameChange=this.nameChange.bind(this);
    }
    nameChange(e)
    {                       //e.가 입력된 곳의 값을 가져와라...?
        console.log("nameChange() Call.....")
        this.setState({name:e.target.value})
        //얘는 안먹음.=> render()를 호출하지 못하거든.
        this.state.name=e.target.value;
    }
    componentWillMount() {

        //Mount가 되기 전에 수행하는 함수
        //외부 서버에서 데이터 읽어옴
        console.log("componentWillMount() Call...")
    }
    // window.onload ==> $(function(){})
    // 다른 프레임워크와 연결 (Jquery,AngularJS ...)
    componentDidMount() {
        //Mount = 메모리에 올리는 것 | componentDidMount -> 화면에 출력해라
        console.log("componentDidMount() Call....")
        
    }
    //읽은 데이터 전부를 화면에 출력
    render() {
        console.log("render() Call..")
        return (
            /*<div>
                {/!*입력할 때 마다 값이 바뀌게 한다*!/}
                이름:<input type={"text"} className={"input-sm"} size={"20"}
                    onChange={this.nameChange}
                />
               <h1>{this.state.name}</h1>
            </div>*/
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="/w3images/lights.jpg">
                    <img src="/w3images/lights.jpg" alt="Lights" style={{"width":"100%"}}/>
                        <div className="caption">
                            <p>Lorem ipsum...</p>
                        </div>
                </a>
            </div>
        </div>
        )
    }
}