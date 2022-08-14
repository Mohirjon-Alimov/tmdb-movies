import { Routes, Route, Link} from 'react-router-dom';
import { Header} from './components/header';
import { Popular} from './pages/popular';
import { TopRated } from './pages/top';
import { TvShows } from './pages/tvShows';
import { Upcoming } from './pages/upcoming';
import { SearchResult} from './pages/serchResult';

export const Private = ()=> {
  return (

    <>
    <div className="container">
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<h2>Welcome</h2>} />
          {/* <Route path='/popular' element={<>popular page</>} /> */}
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/up-coming" element={<Upcoming />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/results" element={<SearchResult />} />
          <Route path='/*' element={<p>not found <Link to='/'>go back</Link></p> } />
        </Routes>
      </div>
    </div>
    
      
    </>
    
  )
}