import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <img src="https://www.wmata.com/about/news/images/2021-Inauguration-System-Map-1_1.jpg" alt="" />
      <button><Link to="/lines">To Metro Lines</Link></button>
    </main>
  )
}

export default Landing
