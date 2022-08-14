import { useRef } from "react";
import { useNavigate} from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();
  let elEmail = useRef();
  let elPass = useRef();
  const handleValue = (evt)=> {
    evt.preventDefault();
    fetch('https://reqres.in/api/login/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        email: elEmail.current.value,
        password: elPass.current.value
      })
    }).then(res => res.json())
    .then((data)=> {
    if(data){
      window.localStorage.setItem('token', data.token);
      navigate('/')
      window.location.reload(true)
    }})
  }

  return (
    <>
      <h2> Login Page </h2>
      <div>
        <form onSubmit={handleValue}>
          <input ref={elEmail} type="email" placeholder="Email" />
          <input ref={elPass} type="password" placeholder="Password" />
          <button type="submit"> submit</button>
        </form>
      </div>
    </>
  )
}