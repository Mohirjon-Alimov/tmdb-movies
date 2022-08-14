import { Link } from 'react-router-dom'
export const HomePublic = ()=> {
  return(
    <div className="box">
      <h2>Welcome, pleace login for continue</h2>

      <Link to='/login'>Login</Link>
    
    </div>
  )
}