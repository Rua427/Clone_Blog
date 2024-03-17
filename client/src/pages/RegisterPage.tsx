import React, {useState} from 'react'

const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const register = async (ev : React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    await fetch('http://localhost:8081/register',{
      method: 'POST',
      body: JSON.stringify({userName, password}),
      headers: {'Content-Type' : 'application/json'},

    });
  }

  return (
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
        <input  type="text" 
                placeholder='username' 
                value={userName} 
                onChange={ev => setUserName(ev.target.value)} />
        <input  type="password"
                placeholder='password' 
                value={password}
                onChange={ev => setPassword(ev.target.value)}/>
        <button>Register</button>
    </form>
  )
}

export default RegisterPage