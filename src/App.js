import React, { useEffect, useContext } from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword, onAuthStateChanged, updateProfile
} from 'firebase/auth'
import Home from './Pages/Home';
import { AuthContext } from './store/Context';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext';
import Search from './store/SearchContext'
import Button from './store/FpostContext'
import { Place } from './store/PlaceContext';
function App() {
  const auth = getAuth()



  const { user, setUser } = useContext(AuthContext)
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setUser(data)
    })

  })
  return (
    <div>
      <Place>
        <Button>
          <Search>
            <Post>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/view" element={<ViewPost />} />

                </Routes>
              </BrowserRouter>
            </Post>
          </Search>
        </Button>
      </Place>
    </div>
  );
}

export default App;
