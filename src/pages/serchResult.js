import {useState} from 'react';
// import { useEffect} from 'react'
import { Card } from '../components/card';

export let SearchResult = ({value}) => {
  if(value !== undefined) {
    console.log(value);
  }
  
  // let [data, setData] = useState([value])

  let [page, setPage] = useState(1)
  let next = ()=>{
    page++
    setPage(page);
  }
  let prew = ()=>{
    page--
    setPage(page);
  }
  // useEffect(()=> {
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=45e38edeeb397cd32bbd8e7ac8721368&language=en-US&page=${page}`)
  //   .then(res => res.json()).then(data => console.log(data.results))
  // },[page])

  return (
    <>
    {value !== undefined && 
    <div>
       <ul className="d-flex flex-wrap align-items-baseline my-2 justify-content-around">
        {value?.length && value.map(e =>{
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
    
    
    </div>
    }
    </>
    
    
  )
}