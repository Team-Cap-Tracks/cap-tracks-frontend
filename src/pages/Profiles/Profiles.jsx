import { Link } from 'react-router-dom'

const Profiles = (props) => {
  return (
    <>
      <h1>Welcome,{props.user}</h1>
      <li><Link to="" onClick={props.handleLogout}>LOG OUT</Link></li>
      <li><Link to="/changePassword">Change Password</Link></li>
    </>
  )
}

export default Profiles