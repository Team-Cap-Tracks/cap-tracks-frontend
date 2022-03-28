import { useState, useEffect } from 'react'
import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import * as lineService from '../../services/Lines'

const Landing = ({ user }) => {
  const [lines, setLines] = useState([])

  useEffect(() => {
    lineService.getAll()
    .then(allLines => setLines(allLines))
  }, [])  

  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <img src="https://i.imgur.com/bHoOQWE.jpg" alt="DC Metro Map" />
      <br></br>
      <Link className={styles.button} to="/lines">
      To Metro Lines
      </Link>
      <br></br>
    </main>
  )
}

export default Landing
