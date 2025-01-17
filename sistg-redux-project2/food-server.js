const express=require('express')
const app=express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
/*
       bind() ===> bind(post,ip) ==> 개통
       listen() => 대기상태
       accept() => 연결이 되면 ~~
 */
app.listen(3355,()=>{
    console.log("Server Start...","http://localhost:3355")
})

const path=require('path')
// public 디렉터리의 내용을 자동으로 응답합니다. --- (※3)
app.use('/', express.static('./public'))
// 최상위 페이지에 접속하면 /public으로 리다이렉트합니다.
app.get('/', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
// 뉴스
/*
      Java , React ==> import
      C/C++ ==> include
      C#    ==> using
      Node  ==> require
 */
const request=require("request")
const xml2js=require('xml2js')
// 웹 => 사용자가 요청한 정보 모아서 전송 , 응답정보(사용자의 IP,PORT)
//               request                    response  ===> 시스템(webserver)에서 처리
// Spring ==> 톰캣
// Node ==> express
// 영화 ==> /news?fd=영화
/*
   http://newssearch.naver.com/search.naver?where=rss&query=%EC%BD%94%EB%A1%9C%EB%82%98
 */
app.get('/news',(req,res)=>{
    var fd=encodeURIComponent(req.query.fd)
    // 네이버에 연결
    var url="http://newssearch.naver.com/search.naver?where=rss&query="+fd;
    // XML => JSON (파서기생성)
    var parser=new xml2js.Parser({
        explicitArray:false
    })

    // 네이버 서버에 접근
    request({url:url},(err,request,xml)=>{
        //console.log(xml)
        parser.parseString(xml,function (err,pJson) {
            console.log(pJson.rss.channel.item)
            res.json(pJson.rss.channel.item)
        })
    })

})
const Client=require("mongodb").MongoClient
/*
  params:{
            page:page
        }
        /recipe?page=1
        public String aaa(HttpServletRequest)
 */
app.get('/recipe',(req,res)=>{
    var page=req.query.page;// request.getParameter("page")
    var rowSize=9;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection("recipe").find({}).skip(skip).limit(rowSize)
            .toArray((err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})
app.get('/category',(req,res)=>{

    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection("category").find({})
            .toArray((err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})
app.get('/cate_food',(req,res)=>{
    var cno=req.query.cno;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection("food").find({cno:Number(cno)})
            .toArray((err,docs)=>{
                res.json(docs)
                console.log(docs)
                client.close()
            })
    })
})
app.get('/category2',(req,res)=>{

    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection("category").find({})
            .toArray((err,docs)=>{
                res.json({"category":docs})
                client.close()
            })
    })
})
app.get('/cate_food2',(req,res)=>{
    var cno=req.query.cno;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection("food").find({cno:Number(cno)})
            .toArray((err,docs)=>{
                res.json({"cate_food":docs})
                console.log(docs)
                client.close()
            })
    })
})
app.get('/news2',(req,res)=>{
    var fd=encodeURIComponent(req.query.fd)
    // 네이버에 연결
    var url="http://newssearch.naver.com/search.naver?where=rss&query="+fd;
    // XML => JSON (파서기생성)
    var parser=new xml2js.Parser({
        explicitArray:false
    })

    // 네이버 서버에 접근
    request({url:url},(err,request,xml)=>{
        //console.log(xml)
        parser.parseString(xml,function (err,pJson) {
            console.log(pJson.rss.channel.item)
            res.json({"news":pJson.rss.channel.item})
        })
    })
})
app.get('/recipe2',(req,res)=>{
    var page=req.query.page;// request.getParameter("page")
    var rowSize=9;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection("recipe").find({}).skip(skip).limit(rowSize)
            .toArray((err,docs)=>{
                res.json({"recipe":docs})
                client.close()
            })
    })
})
