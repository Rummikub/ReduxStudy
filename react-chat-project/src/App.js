import React,{Component} from 'react';
import axios from 'axios'
import $ from 'jquery'
import io from 'socket.io-client'
/*
      class  기반 컴포넌트 => Hooks 사용 X
                          -------- function 기반에서 class에서 사용하는 생명주기를 가져오는 기능
                          class :  props, state
                                  => 생명주기 함수
                          function : props (O) , state (X) ==> state를 관리하는 프로그램
                                                               ----- Data
                                    => function의 모든 함수 - render()
                                    function App()=> render() : 화면UI(HTML)
                                    state 를 사용가능 하게 만듦 = useState ~ setState
 */
const socket=io.connect('http://localhost:7777')
class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      movie:[],
      logs:[]           //채팅문자열 저장
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3355/movie").then((result)=>{
      this.setState({movie:result.data})
    })
      socket.on('chat_msg',(obj)=>{
        const log2=this.state.logs;
        log2.push(obj)
        this.setState({logs:log2})
      })
    $('div#chat').toggleClass('active');
    var $win = $(window);
    var top = $(window).scrollTop(); // 현재 스크롤바의위치값을 반환합니다.

    /*사용자 설정 값 시작*/
    var speed          = 1000;      // 속도 : "slow", "normal", or "fast" or numeric(단위:msec)
    var easing         = 'linear'; // 방법 기본 두가지 linear, swing
    var $layer         = $('div#chat_container'); // 레이어셀렉팅
    var layerTopOffset = 0;   // 레이어 높이 상한선, 단위:px
    $layer.css('position', 'absolute');
    /*사용자 설정 값 끝*/

    // 스크롤 바를 내린 상태에서 리프레시 했을 경우를 위해
    if (top > 0 )
      $win.scrollTop(layerTopOffset+top);
    else
      $win.scrollTop(0);

    //스크롤이벤트가 발생하면
    $(window).scroll(function(){

      var yPosition = $win.scrollTop()+300;
      if (yPosition< 0)
      {
        yPosition = $win.scrollTop()+300;
      }
      $layer.animate({"top":yPosition }, {duration:speed, easing:easing, queue:false});
    });
  }
  render() {
    const html=this.state.movie.map((m)=>

          <div className="col-md-4">
            <div className="thumbnail">
                <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                  <div className="caption">
                    <p>{m.title}</p>
                  </div>
            </div>
          </div>
    )
    return(
        <React.Fragment>
            <div className={"row"}>
              {html}
            </div>
          <ChatMain logs={this.state.logs}/>
        </React.Fragment>

    )
  }
}
class ChatMain extends Component{

  render(){
    const html=this.props.logs.map((m)=>
        <div className={"message right"}>
          <div className={"message-text"}>{m.message}</div>
        </div>
    )
    return (
        <div id={"chat_container"}>
          <div id={"chat"} className={"active"}>
            <header><h1>CHAT</h1></header>
            <section className={"content"}>
              <div className={"message_content"}>
                {html}
              </div>
            </section>
            <ChatForm/>
          </div>
        </div>
    )
  }
}
class ChatForm extends Component{
  constructor(props) {
    super(props);
    this.state={
      message:''
    }
  }
  messageChange(e)
  {
    this.setState({message:e.target.value})
  }
  send(e)
  {
    if(e.key==='Enter')
    {
      e.preventDefault();   //이벤트 동작 정지
      socket.emit('chat_msg',{
        message:this.state.message
      })
      this.setState({message:''})
    }
  }
  render() {
    return (
        <form action={"/"}>
          <input id={"input_chat"} type={"text"}
            onChange={this.messageChange.bind(this)}
            onKeyPress={this.send.bind(this)}
                 value={this.state.message}
          />
        </form>
    )
  }
}
export default App;
