import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/Navbar/NavBar';
import Banner1 from './Components/Banner1/Banner1';
import Scrollbar from './Components/Scrollbar/Scrollbar';
import BlogHolder from './Components/BlogHolder/BlogHolder';
import reportWebVitals from './reportWebVitals';
import profilepic from './Components/Navbar/balu.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NavBar
      image={profilepic}
      username="balu4"
    />
    <Banner1 />
    <hr/>
    <Scrollbar />
    <hr/>
    <BlogHolder />
    <hr/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
