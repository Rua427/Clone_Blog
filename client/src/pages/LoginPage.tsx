import React, {useState} from 'react'

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = async (ev: React.FormEvent<HTMLFormElement>) =>{
    ev.preventDefault();
    await fetch('http://localhost:8081/login',{
      method:'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    })
  }
  return (
    <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input type="text" 
          placeholder='username' 
          value={username} 
          onChange={ev => setUserName(ev.target.value)}/>
        <input type="password" 
          placeholder='password' 
          value={password}
          onChange={ev => setPassword(ev.target.value)}/>
        <button>Login</button>
    </form>
  )
}

export default LoginPage
