import React from 'react'
import StudentAddForm from './Components/StudentAddForm/StudentAddForm'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import PageData from './Components/Hooks/p6/PageData'
import Task from './Components/Hooks/p1/Task'
import Post from './Components/Hooks/p2/Post'
import Content from './Components/Hooks/p3/ReadMore'
import PostsList from './Components/Hooks/p4/PostsList'
import TodoList from './Components/Hooks/p5/TodoList'
import Home from './Components/Home/home'
import Data from './Components/Hooks/p7/Data'
import Profiles from "./Components/Hooks/p7/Profiles";
import ErrorPages from "./Components/Error/ErrorPages";



export default function App() {
  return (
    <Router>
      <nav>
        <Link to='/Home'><button>Home</button></Link>
        <Link to="/p1"> <button>Hooks P1</button></Link>
        <Link to="/p2"> <button>Hooks P2</button></Link>
        <Link to="/p3"> <button>Hooks P3</button></Link>
        <Link to="/p4"> <button>Hooks P4</button></Link>
        <Link to="/p5"> <button>Hooks P5</button></Link>
        <Link to="/p6"> <button>Hooks P6</button></Link>
        <Link to="/p7"> <button>Hooks P7</button></Link>
        <Link to="/StudentAddForm"> <button>CRUD</button></Link>
      </nav>
      <br />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/p1" element={<Task/>} />
        <Route path="/p2" element={<Post/>} />
        <Route path="/p3" element={<Content/>} />
        <Route path="/p4" element={<PostsList/>} />
        <Route path="/p5" element={<TodoList/>} />
        <Route path="/p6" element={<PageData/>} />
        <Route path="/p7" element={<Data/>} />
        <Route path="/Hooks/profile/:login" element={<Profiles />} />
        <Route path="/StudentAddForm" element={<StudentAddForm/>} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
    </Router>
  )
}
