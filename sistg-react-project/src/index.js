import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App5 from './App5';
import * as serviceWorker from './serviceWorker';
//  <App2 /> => 리턴값을 받는 것이다.
// name={"홍길동"} => 생성자 매개변수 넘길때
//JSON, 배열, 일반데이터를 넘길수있다.
//name={"홍길동"} sex={"남자"} age={"30"} => props에 저장됨!
/*

const 상수형변수 다른값으로 변경x
ES6버전 => 변수 추가됨 const:상수형변수 => const a=10; a=20; error! ==> 자동변수 (a:int) 모든 데이터형에 능동적.
                    let: Scope가 명확한 변수(지역변수)
                    function display()
                    {
                        let i=10;
                    }
                    i는 {} 밖에서 사용할 수 없다.(이전의 var는 사용x)
                    ===========================================
                    스프레드 연산자 : 사용경우 => 복사를 할때
                    const aaa=[1,2,3]
                    const bbb=[...aaa](배열에 있는 모든 값을 카피를 떠라!!   ... => 배열의 모든 값을 가져와라)  ==> bbb=[1,2,3]

                    화살표 함수 : 사용경우 => function, return 을 생략하고 싶을 경우!
                    function aaa(){
                    }
                    const aaa=()=>{}
                    const aaa=function(){}
                    for => forEach, map

                    const bbb=['aaa','bbb','ccc']
                    bbb.map((data)=> {
                        data='aaa'
                        data='bbb'
                        data='ccc'
                    })

                    const bbb=[{no:1,name:''},{no:2,name:''},{no:3,name:''}]
                    bbb.map((data)=>{
                        data={no:1,name:''}
                        data={no:2,name:''}
                        data={no:3,name:''}  ==> data.no, date.name

                    })

                    bbb.forEach((data) =>{

                        data={no:1,name:''}
                        data={no:2,name:''}
                        data={no:3,name:''}  ==> data.no, data.name

                    })

                    => ${} (EL), {문자열}, {변수}

                    <App4 movie={movie} aaa={} bbb={}/> => index.js 에서 이렇게 보내는것이 생성자의 매개변수에 값을 전송(속성값으로하여)하는 것이다.
                    리액트 => 상태관리 프로그램
                            ====state ========> 데이터관리프로그램! 많은 데이터를 효율적으로 관리가능!
                    class App4 extends Component{
                        constructor(props) 생성자함수 (위 매개변수 속성들을 한번에 받는 props! 넘겨준 데이터 전체를 받는다.)
                            props.movie props.aaa props.bbb를 모두 받음!(props:리액트변수)
                        {
                            props, state => 멤버변수 => 한 클래스 안에서 어디에서나 사용가능! =>따라서 this.props.movie로 사용해야
                            let a=10;)=> 이 변수는  {}안에서만 사용가능!
                            생서자를 통해 매개변수로 들어온 값은 생성자 안에서는 절대불변! => 초기값으로 들어오고
                            아래 다른 영역에서 값 주입하여 변경가능! => 이렇게 변경하여 사용하는 변수는 state
                            props의 초기값을 변화할순없고 state=props로 하여 값을 state변수에 넣어서 사용할수는 있다.
                            props => 변경할 수 없는 변수
                            state => 변경해서 사용하는 변수

                            var a=[]
                            var b={}
                            var c=1

                            state={    ==> 우리가 생각하는 vo와 같은 개념! 값을 한데 모아 한번에 전송!
                                a:[],
                                b:{},
                                c:1

                            }
                        }
                        render()
                        {

                        }
                    }
                       ***App4() =>생성자호출된다!



*/
const movie=[{"actor":"(주연) 라미란, 김무열, 나문희, 윤경호","score":7.8,"director":"(감독) 장유정","grade":"12세이상관람가","genre":"코미디","regdate":"2020.02.12 개봉","time":"104분","title":"정직한 후보 (2019)","poster":"\/\/img1.daumcdn.net\/thumb\/C155x225\/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F08bddecf7d26414585157598e5e453031579576516419","story":"어제까진 뻥쟁이, 오늘부턴 정직한 후보?! 거짓말이 제일 쉬운 3선 국회의원 '주상숙'에게 청천벽력이 떨어진다. 하루아침에 거짓말은 1도 할 수 없는 '진실의 주둥이'를 갖게 된 것! 최고의 무기인 '거짓말'을 잃자 그녀의 인생은 송두리째 흔들리게 되는데... 웃음 빵! 속이 뻥! 뚫리는 통쾌한 웃음 폭격이 시작된다!"},{"actor":"(주연) 하정우, 김남길, 허율","score":7.2,"director":"(감독) 김광빈","grade":"15세이상관람가","genre":"미스터리\/드라마","regdate":"2020.02.05 개봉","time":"98분","title":"클로젯 (2020)","poster":"\/\/img1.daumcdn.net\/thumb\/C155x225\/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fa6bfbf52ff0e42798e95fe37cc67fddc1579154685345","story":"벽장 문이 열리고, 아이가 사라졌다! 갑작스러운 사고로 아내를 잃은 상원(하정우)과 그의 딸 이나(허율) 상원은 소원해진 이나와의 관계를 회복하기 위해 새집으로 이사를 간다. 상원은 이나와 가까워지기 위해 노력하지만 어긋난 사이는 좀처럼 회복되지 않는다. 그러던 어느 날 이나가 새로운 친구가 생겼다며 웃기 시작한다. 하지만 평온도 잠시, 이나의 방 안에 있는 벽장에서 기이한 소리들이 들려오고 이나에게 이상 증세가 나타난다. 그리고 상원마저 이상한 꿈을 꾸기 시작한 지 얼마 후, 이나가 흔적도 없이 사라진다. 이나의 흔적을 쫓는 상원에게 의문의 남자 경훈(김남길)이 찾아와 딸의 행방을 알고 있다며 가리킨 곳은 다름 아닌 이나의 \u2018벽장\u2019. 10년간 실종된 아이들의 행방을 쫓고 있는 경훈은 믿기 힘든 이야기를 꺼내고 상원은 딸을 찾을 수 있다는 마음으로 열어서는 안 될 벽장을 향해 손을 뻗는데\u2026"},{"actor":"(주연) 시얼샤 로넌, 엠마 왓슨, 플로렌스 퓨, 엘리자 스캔런, 로라 던, 티모시 샬라메, 메릴 스트립","score":7.7,"director":"(감독) 그레타 거윅","grade":"전체관람가","genre":"드라마\/로맨스\/멜로","regdate":"2020.02.12 개봉","time":"135분","title":"작은 아씨들 (2019)","poster":"\/\/img1.daumcdn.net\/thumb\/C155x225\/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1d80cc8636c644aabd2597fc090183101579244282177","story":"Dear women 그해 겨울, 사랑스러운 자매들을 만났다 배우가 되고 싶은 첫째 메그(엠마 왓슨) 작가가 되고 싶은 둘째 조(시얼샤 로넌) 음악가가 되고 싶은 셋째 베스(엘리자 스캔런) 화가가 되고 싶은 막내 에이미(플로렌스 퓨) 이웃집 소년 로리(티모시 샬라메)는 네 자매를 우연히 알게되고 각기 다른 개성의 네 자매들과 인연을 쌓아간다. 7년 후, 어른이 된 그들에겐 각기 다른 숙제가 놓이게 되는데\u2026"},{"actor":"(주연) 이병헌, 이성민, 곽도원, 이희준, 김소진","score":8.4,"director":"(감독) 우민호","grade":"15세이상관람가","genre":"드라마","regdate":"2020.01.22 개봉","time":"114분","title":"남산의 부장들 (2019)","poster":"\/\/img1.daumcdn.net\/thumb\/C155x225\/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F2b07e0c665de4482b9a0094f66bc11761578025532290","story":"\u201C각하, 제가 어떻게 하길 원하십니까\u201D 1979년 10월 26일, 중앙정보부장 김규평(이병헌)이 대한민국 대통령을 암살한다. 이 사건의 40일전, 미국에서는 전 중앙정보부장 박용각(곽도원)이 청문회를 통해 전 세계에 정권의 실체를 고발하며 파란을 일으킨다. 그를 막기 위해 중앙정보부장 김규평과 경호실장 곽상천(이희준)이 나서고, 대통령 주변에는 충성 세력과 반대 세력들이 뒤섞이기 시작하는데\u2026 흔들린 충성, 그 날의 총성"},{"actor":"(주연) 마고 로비, 메리 엘리자베스 윈스티드, 저니 스몰렛, 로지 페레즈, 엘라 제이 바스코, 이완 맥그리거, 크리스 메시나","score":6.9,"director":"(감독) 캐시 얀","grade":"15세이상관람가","genre":"액션\/어드벤처\/범죄","regdate":"2020.02.05 개봉","time":"108분","title":"버즈 오브 프레이(할리 퀸의 황홀한 해방) (2020)","poster":"\/\/img1.daumcdn.net\/thumb\/C155x225\/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F68e96e40758a492baf14cbc16123410b1579585536566","story":"똑같으면 재미없지 깨부수고 벗어 던져, 너답게! 오랜 연인이던 조커와 헤어진 '할리 퀸(마고 로비)'은 처음 맞이한 해방에 황홀함을 느낀다. 하지만 조커라는 방패막이 사라지자 평생 처음 무방비 상태에 놓인 할리 퀸을 고담시에서 가장 비열한 범죄왕 로만 시오니스(이완 맥그리거)와 고담의 모든 갱들이 노린다. 통제 불능의 상태에서 카산드라라는 소녀가 로만의 부하에게서 모든 권력과 고담시 지하 세계 전체의 지배권을 차지할 열쇠인 금융 정보가 암호화되어 있는 다이아몬드를 훔치면서 사건은 겉잡을 수 없이 급변한다. 로만 손에 죽을 위기에 처한 할리 퀸은 헌트리스, 블랙 카나리, 르네 몬토야와 새로운 팀을 결성해 로만에 맞서는데\u2026"},{"actor":"(주연) 짐 캐리, 제임스 마스던, 벤 슈와츠","score":6.7,"director":"(감독) 제프 파울러","grade":"전체관람가","genre":"애니메이션\/액션\/어드벤처\/판타지\/SF","regdate":"2020.02.12 개봉","time":"98분","title":"수퍼 소닉 (2020)","poster":"\/\/img1.daumcdn.net\/thumb\/C155x225\/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff50d6fca70054f3fa7e991443b3795891578899401302","story":"세상을 구할 초고속 히어로의 탄생! 소리보다 빠른 초고속 고슴도치 히어로 '소닉'은 지구에 불시착한다. 그의 특별한 능력을 감지한 과학자 \u2018닥터 로보트닉\u2019은 세계 정복의 야욕을 채우려 하고, 경찰관 \u2018톰\u2019은 위험에 빠진 \u2018소닉\u2019을 돕기 위해 나서는데\u2026! 과연, \u2018소닉'은 천재 악당에 맞서 지구를 지킬 수 있을까?"},{"actor":"(주연) 로먼 그리핀 데이비스, 토마신 맥켄지, 타이카 와이티티, 스칼렛 요한슨","score":8.4,"director":"(감독) 타이카 와이티티","grade":"12세이상관람가","genre":"코미디\/드라마\/전쟁","regdate":"2020.02.05 개봉","time":"108분","title":"조조 래빗 (2019)","poster":"\/\/img1.daumcdn.net\/thumb\/C155x225\/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2Fda8feb328ca22bfb79b2740c4e22b5bdc127a3c5","story":"제2차 세계대전 말기, 엄마 \u2018로지\u2019(스칼렛 요한슨)와 단둘이 살고 있는 10살 소년 \u2018조조\u2019(로만 그리핀 데이비스). 원하던 독일 소년단에 입단하지만 겁쟁이 토끼라 놀림 받을 뿐이다. 상심한 \u2018조조\u2019에게 상상 속 친구 \u2018히틀러\u2019(타이카 와이티티)는 유일한 위안이 된다. \u2018조조\u2019는 어느 날 우연히 집에 몰래 숨어 있던 미스터리한 소녀 \u2018엘사\u2019(토마신 맥켄지)를 발견하게 된다. 세상에서 가장 위험한 인물이 왜 여기에?! 당신을 웃긴 만큼 따뜻하게 안아줄 이야기가 펼쳐진다!"},{"actor":"(주연) 신용우, 엄상현, 양정화, 이소영","score":7.9,"director":"(감독) 이영준","grade":"전체관람가","genre":"애니메이션","regdate":"2020.02.06 개봉","time":"73분","title":"극장판 미니특공대: 공룡왕 디노 (2019)","poster":"\/\/img1.daumcdn.net\/thumb\/C155x225\/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1cfb22f364db4e238ed3c09aec2998561579050371567","story":"호기심 많은 소년 '얀'은 공룡왕 열쇠로 '디노'를 만나 비밀친구가 된다. 그러던 중 우주악당 '퀸'이 지구를 위협하고 이에 '미니특공대'는 공룡왕 '디노'와 함께 역대급 대결을 펼치는데..! 과연, \u2018미니특공대\u2019와 공룡왕 \u2018디노\u2019는 지구를 지켜낼 수 있을까?!"}]
ReactDOM.render(
    <React.StrictMode>
        <App5 />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();