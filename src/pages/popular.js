import {useState} from 'react';
import { useEffect} from 'react'
import { Card } from '../components/card';
export let Popular = ()=> {

  let [data, setData] = useState([])

  let [page, setPage] = useState(1)
  //  page = 1;
  let next = ()=>{
    page++
    // console.log(page);
    setPage(page);
  }
  let prew = ()=>{
    page--
    setPage(page);
  }
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=45e38edeeb397cd32bbd8e7ac8721368&language=en-US&page=${page}`)
    .then(res => res.json()).then(data => setData(data.results))
  },[page])
  


  // console.log(data);
  return(
    <>
    <ul className="d-flex flex-wrap align-items-baseline my-2 justify-content-around">
      {data?.length && data.map(e =>{
      return(
      <Card key={e.id} img={e.poster_path} title={e.original_title} date={e.release_date} />)
      })}
      
    </ul>
    <div className="w-25 d-flex justify-content-around">
      <button className="btn btn-primary"onClick={()=> {
      if(page!==1){
        prew()
      }}}>prew</button>
      <button className="btn btn-primary"onClick={()=> next()}>next</button>
    </div>
    
    </>
    
  )

}