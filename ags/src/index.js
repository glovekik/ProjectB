import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import Open from './open';
import Login from './login';
import Home from './home';
import Artist from './artist';
import Blog from './blog';
import Painting from './painting';
import Profile from './profile';
import{BrowserRouter, Routes, Route} from 'react-router-dom';


function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Open/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/home"  element = {<Home/>}></Route>
        <Route path = "/artist" element = {<Artist/>}></Route>
        <Route path = "/blog" element = {<Blog/>}></Route>
        <Route path = "/painting" element = {<Painting/>}></Route>
        <Route path = "/profile" element = {<Profile/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Website/>,document.getElementById('root'));