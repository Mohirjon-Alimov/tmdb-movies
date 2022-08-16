import {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useEffect} from 'react'
import { Card } from '../components/card';
import { PaginationMovies} from '../components/pagination'
import axios from 'axios';
import useDebounce from '../hook/useDebounce';

export let SearchResult = () => {
 
  const {searchQuery} =useParams()

  const debouncedValue = useDebounce(searchQuery, 500)
  let [data, setData] = useState({
    isLoading:true,
    isError: false,
    data: {},
    total_pages: 0,
  })

  let [page, setPage] = useState(1)

  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/search/movie`,{
      params: {
        api_key:"45e38edeeb397cd32bbd8e7ac8721368",
        page : page,
        query : debouncedValue
      },
    })
    .then(res=> 
      setData({
        isLoading: false,
        isError: false,
        data : res.data.results,
        total_pages: res.data.total_pages> 500? 500: res.data.total_pages,
      })
    )
    .catch(err => setData({
      isLoading:false,
      isError: true,
    }))
  },[page, debouncedValue])

  return (
    <>
    {data.data  && 
    <div>
       <ul className="d-flex flex-wrap align-items-baseline my-2 justify-content-around">
        {data.data?.length && data.data.map(e =>{
        return(
        <Card key={e.id} img={e.poster_path} title={e.original_title} date={e.release_date} />)
        })}
        
      </ul>
      <div className="my-4 d-flex justify-content-center">
        <PaginationMovies data={data} setPage={setPage} />
      </div>
    </div>
    }
    </>
    
    
  )
}