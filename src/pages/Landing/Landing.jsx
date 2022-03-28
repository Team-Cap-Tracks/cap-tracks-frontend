import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <img src="https://i.imgur.com/bHoOQWE.jpg" alt="DC Metro Map" />
      <br></br>
      <Link to="/lines">
      <button>To Metro Lines</button>
      </Link>
      <br></br>
    </main>
  )
}

export default Landing
