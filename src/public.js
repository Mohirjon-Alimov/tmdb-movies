import { Routes, Route, Link} from 'react-router-dom';
import { Login} from './pages/loginPage';

export const Public = ()=> {
  return (
    <Routes>
      <Route path='/' element={<>home public <Link to='/login'>login</Link> </>} />
      {/* <Route path='/home' element={<>home public <Link to='/login'>login</Link> </>} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<>not found</>} />
    </Routes>
  )
}