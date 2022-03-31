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
import * as timeTableService from './services/TimeTables'
import * as ticketService from './services/ticketService'
import { FooterContainer } from './containers/footer'
import StationDetails from './pages/StationDetails/StationDetails.jsx'


import "./App.css"

const App = () => {
  const [lines, setLines] = useState([])
  const [timeTables, setTimeTables] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const [tickets, setTickets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    lineService.getAll()
    .then(allLines => setLines(allLines))
  }, [])

  useEffect(() => {
    timeTableService.getAllTimes()
    .then(allTimeTables => setTimeTables(allTimeTables))
  }, [])

  useEffect(() => {
    ticketService.getAll()
    .then(allTickets => setTickets(allTickets))
  }, [])

  const handleAddTicket = async newTicketData => {
    const newTicket = ticketService.create(newTicketData)
    setTickets([...tickets, newTicket])
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleDelete = (id) => {
    ticketService.deleteTicket(id)
    .then(deletedTicket => setTickets(tickets.filter(ticket => ticket._id !== deletedTicket._id)))
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <div className='content'>
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
            lines={lines}
            user={user} 
            handleLogout={handleLogout} 
            handleAddTicket={handleAddTicket}
            tickets={tickets}
            handleDelete={handleDelete}
            />
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
            element={<StationsList />}
          />
          <Route path='/station-details/:code' 
            element={<StationDetails timeTables={{timeTables}}/>}
          />
        </Routes>
      </div>
      <FooterContainer
      />
    </>
  )
}

export default App
