import { Routes, Route} from 'react-router-dom';
import { Login} from './pages/loginPage';
import { HomePublic} from './pages/public';

export const Public = ()=> {
  return (
    <Routes>
      <Route path='/' element={<HomePublic />} />
      {/* <Route path='/home' element={<>home public <Link to='/login'>login</Link> </>} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<>not found</>} />
    </Routes>
  )
}