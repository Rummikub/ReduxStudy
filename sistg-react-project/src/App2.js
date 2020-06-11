import React,{Component,Fragment} from "react";
//${"Hello"} ==> {} ; 변수 출력
/*

        꼭 div안에 div
        container>row>row (Bootstrap에서 tag가 어그러질 수 있음)

        React => 화면 UI(HTML) => render
                 ===============JSX (JavaScript + XML)
                 화면 -> class기반, function 기반 
                 
        React           ==>  JavaScript지만 문법은 XML을 따른대
         JSX, 가상DOM

        React       Redux       Mobx(Saga)
        -----       -----       ----------
        JSP         MVC         Spring

       XML 문법
       = 클래스명, 함수명 -> class App, function App2 => App2()  : 생성자
                          =========  =============
                           <App>       <App2>      <= 호출법  (XML형식, 태그를 호출해야 된다)
          1. HTML태그와 사용자 정의 태그를 구분
            --------   -------------
            반드시 소문자    첫자만 대문자
          2. 문법사항이 엄격하다
          ReactDOM.render ()
          => XML -> HTML로 변환
           React.createElement('<ul>')...

*/
class App2 extends Component{
    render() {
        //=>삼항연산자, map사용 가능함
        return (
          /*<ul>
              <li>Java1</li>
              <li>Java2</li>
              <li>Java3</li>
          </ul>*/

            React.createElement('ul',null,
                React.createElement('li',null,'java1'),
                React.createElement('li',null,'java2'),
                React.createElement('li',null,'java3'),
            )
        )
    }
}
export default App2;