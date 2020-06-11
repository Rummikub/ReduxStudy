import React,{useEffect,useState} from 'react';
import axios from 'axios'


function App() {
  const [food,setFood]=useState([])
  useEffect(()=>{
    axios.get('http://211.238.142.200:80/web/category.do').then((result)=>{
      setFood(result.data)
    })
  },[])
  //componentDidMount,componentDidUpdate
  const html=food.map((m,key)=>
    <li key={key}>{m.title}-{m.subject}</li>
  )
  return (
    <ul>
      {html}
    </ul>
  );
}

export default App;
