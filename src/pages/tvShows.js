import {useState} from 'react';
import { useEffect} from 'react'
import { Card } from '../components/card';
import { PaginationMovies } from '../components/pagination';
import axios from 'axios';

export let TvShows = ()=> {
  let [data, setData] = useState([])

  let [page, setPage] = useState(1)
  
  useEffect(()=> {
    // fetch(`https://api.themoviedb.org/3/tv/popular?api_key=45e38edeeb397cd32bbd8e7ac8721368&language=en-US&page=${page}`)
    // .then(res => res.json()).then(data => setData(data.results))

    axios.get(`https://api.themoviedb.org/3/tv/popular`,{
      params: {
        api_key:"45e38edeeb397cd32bbd8e7ac8721368",
        page : page,
      },
    })
    .then(res=> setData({
        data : res.data.results,
        total_pages: res.data.total_pages> 500? 500: res.data.total_pages,
      })
    )
    .catch(err => console.log(err))
  },[page])

  return (
    <>
       <ul className="d-flex flex-wrap align-items-baseline my-2 justify-content-around">
        {data.data?.length && data.data.map(e =>{
        return(
        <Card key={e.id} img={e.poster_path} title={e.name} vote={e.vote_average} />)
        })}
        
      </ul>
      <div className="my-4 d-flex justify-content-center">
        <PaginationMovies data={data} setPage={setPage} />
      </div>
    
    
    </>
  )
}