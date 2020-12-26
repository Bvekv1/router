import React from 'react';
import ReactDOM from  'react-dom';
import Posts from './components/posts';
import Profile from './components/profile';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/home';

const App  = () =>{
  return(
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Home</Link>
        <Link to="/profile">Home</Link>
      </header>
      <Route path="/" component={Home}/>
    <Route path="/posts" component={Posts}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/" component={Home}/>
    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)