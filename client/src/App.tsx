import './App.css'
import Post from "./Post"
import Header from "./Header"
import {Route, Routes} from 'react-router-dom'

const App = () => {
  const name = ''
  return (
    <Routes>
      <Route index element={
        <main>
          <Header/>
          <Post/>
          <Post/>
          <Post/>
        </main>
      }/>
      <Route path= {"/login"} element ={
        <main>
          <Header/>
          <div>login page</div>
        </main>
      } />
    </Routes>
    
  )
}

export default App
