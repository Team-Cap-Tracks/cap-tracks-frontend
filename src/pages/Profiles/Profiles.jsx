import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'

const Profiles = ({ user, handleLogout }) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1><li>Welcome, {}</li></h1>
      <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
      {profiles.length ? 
        <>
          {profiles.map(profile=>
            <p key={profile._id}>{profile.name}</p>
          )}
        </>
      
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profiles