const express=require("express")
//서버
const app=express();
const port=3355;


app.listen(port,()=>{
    console.log("Start Server...","http://localhost:3355")
})
/*PORT가 달라고 도메인을 읽어주게 설정 CORS허용*/
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.get('/',(req,res)=>{
    res.send('HelloNodejs')
})

const MongoConnect=require("mongodb").MongoClient;
//  /recipe_data?page=1

app.get('/recipe_data',(req,res)=>{
// app.post () => get방식 post방식
    var page=req.query.page; //request.getParameter("page")
    var rowSize=12;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017"

    MongoConnect.connect(url,function (err,client) {
    var db=client.db('mydb');
                                        // mongodb는 값이 낱개로 되어있어서 이걸 배열로 만들어 준다
        db.collection('recipe').find({}).skip(skip).limit(rowSize).toArray(function(err,docs){
          res.json(docs); // model.addAttribute("list",list);  ABER, JS에는 ArrayList가 존재하지 않음
          client.close(); // [{},{},...]
        })
    })
})
app.get('/total_data',(req,res)=>{
    var url="mongodb://211.238.142.181:27017";
    MongoConnect.connect(url,(err,client)=>{
        var db=client.db('mydb');
        db.collection('recipe').find({}).count((err,count)=>{
            res.json({total:Math.ceil(count/12.0)})
            client.close()
            return count;
        })
    })
})

app.get('/chef_data',(req,res)=>{
    var page=req.query.page;
    var rowSize=50;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017"
    MongoConnect.connect(url,function (err,client) {
        var db=client.db('mydb');
        db.collection('chef').find({}).skip(skip).limit(rowSize).toArray(function(err,docs){
            res.json(docs);
            client.close();
        })
    })
})
app.get('/chef_total',(req,res)=>{
    var url="mongodb://211.238.142.181:27017";
    MongoConnect.connect(url,(err,client)=>{
        var db=client.db('mydb');
        db.collection('chef').find({}).count((err,count)=>{
            res.json({total:Math.ceil(count/50.0)})
            client.close()
            return count;
        })
    })
})
const xml2js=require("xml2js")
//XML -> JSON
const request=require("request")
//서버 -> 다른 서버로 연결 할 때 사용
app.get("/recipe_news",(req,res)=>{
    var query=encodeURIComponent(req.query.fd);  //검색어를 인코딩 해서 보내줘야 함 ( 컴퓨터가 인식할 수 있게 함 )
    var url="http://newssearch.naver.com/search.naver?where=rss&query="+query;
    var parser=new xml2js.Parser({
        explicitArray:false
    })
    // XML을 JSON으로 변환하는 코드
    request({url:url},(err,request,xml)=>{
        console.log(xml)
        parser.parseString(xml,function(err,pJson){
            console.log(pJson.rss.channel.item);
            res.json(pJson.rss.channel.item)
        })
    })
})
