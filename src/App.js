import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Zone from './components/Zone/Zone';

function App() {
  const [friends, setFriends] = useState([]);
  // useEffect(() => {
  //   fetch('https://randomuser.me/api/10')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // })
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <Zone></Zone>
    </div>
  );
}

export default App;
