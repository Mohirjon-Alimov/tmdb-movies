import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { SearchResult} from '../pages/serchResult'


export const Header = ()=> {
  let [inputValue, setInputValue] = useState('');
  let navigate = useNavigate()
  useEffect(()=> {

    if(inputValue.trim().length > 0) {
      navigate("/results/"+ inputValue);
      <SearchResult value={inputValue} />
    }else if (inputValue.length === 0){
      navigate('/')
    }
    
  },[ inputValue])

  return (
    <>
      <header className="header d-flex align-items-center justify-content-around">
        <nav>
          <ul className="m-0 d-flex list-unstyled align-items-center">
            <li className="mx-2 list-item">
              <Link to='/'>home page</Link>
            </li>
            <li className="mx-2 list-item">
              <Link to='/popular'>popular</Link>
            </li>
            <li className="mx-2 list-item">
              <Link to='/top-rated'>Top Rated Movies</Link>
            </li>
            <li className="mx-2 list-item">
              <Link to='/up-coming'>Up Coming Movies</Link>
            </li>
            <li className="mx-2 list-item">
              <Link to='/tv-shows'>TV Shows</Link>
            </li>
        
          </ul>
        </nav>
        
        <input onChange={(evt)=> { setInputValue(evt.target.value)}} type="search" placeholder="Search" />
       
      </header>

    </>
  )
}