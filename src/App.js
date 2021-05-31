import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React, { useEffect } from "react";
import Main from './Main'
import User from './User'
import Post from './Post'
import Create from './Create'
import { API } from 'aws-amplify'



function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/post/create" element={<Create />} />
            <Route path="/posts" element={<User />} />
            <Route path="/1f373/:easterEgg" element={<Post />} />
        </Routes>
    </Router>
  );

}

export default App;
