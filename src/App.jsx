import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/index.js'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Lines from './pages/Lines/Lines'
import StationsList from './pages/Stations/Stations'
import * as authService from './services/authService'
import * as lineService from './services/Lines'


import "./App.css"

const App = () => {
  const [lines, setLines] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  useEffect(() => {
    lineService.getAll()
    .then(allLines => setLines(allLines))
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles 
          user={user} handleLogout={handleLogout} />
          : 
          <Navigate to="/" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route path='/lines' 
          element={<Lines 
          lines={lines}
        />} />
        <Route path='/stations' 
          element={<StationsList lines={lines} />}
        />
      </Routes>
    </>
  )
}

export default App
