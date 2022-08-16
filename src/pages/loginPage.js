import axios from "axios";
import { useRef } from "react";
import { useNavigate} from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();
  let elEmail = useRef();
  let elPass = useRef();

  const handleValue = (evt)=> {
    evt.preventDefault();
    // fetch('https://reqres.in/api/login/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   body: JSON.stringify({
    //     email: elEmail.current.value,
    //     password: elPass.current.value
    //   })
    // }).then(res => res.json())
    // .then((data)=> {
    // if(data.token !== undefined){
    //   window.localStorage.setItem('token', data.token);
    //   navigate('/')
    //   window.location.reload(true)
    // }})
    axios.post('https://reqres.in/api/login/',{
      email: elEmail.current.value,
      password: elPass.current.value
    }).then(res => {
      if(res.data.token !== undefined){
        window.localStorage.setItem('token', res.data.token);
        window.location.reload(true);
        navigate('/');
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="login w-50">
      <h2> Enter your email and password </h2>
      <div>
        <form onSubmit={handleValue}>
          <input className="d-block form-control" ref={elEmail} type="email" placeholder="Email" />
          <input className="d-block form-control my-4" ref={elPass} type="password" placeholder="Password" />
          <button className="btn btn-primary" type="submit "> Submit</button>
        </form>
      </div>
    </div>
  )
}