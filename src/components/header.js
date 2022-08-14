import {Link} from 'react-router-dom'
import { useRef} from 'react'
import { useNavigate} from 'react-router-dom'
import { SearchResult} from '../pages/serchResult'


export const Header = ()=> {

  let elInput = useRef();
  let navigate = useNavigate()

  let search = (evt)=> {

    evt.preventDefault();
    // fetch(`https://api.themoviedb.org/3/search/movie?api_key=45e38edeeb397cd32bbd8e7ac8721368&language=en-US&query=${elInput.current.value}&page=${page}`).then(res => res.json())
    // .then(data=> {<SearchResult value={data.results} />})
    // console.log(elInput.current.value);
    // let value = elInput.current.value;
    // <SearchResult value={elInput.current.value} />
    navigate('/results')
    // elInput.current.value = null;
  }
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
        <form onSubmit={(evt)=> {search(evt)
        console.log(elInput.current.value);
        <SearchResult value={elInput.current.value} />}}>
          <input ref={elInput} type="search" placeholder="Search" />
        </form>
        
      </header>

    </>
  )
}