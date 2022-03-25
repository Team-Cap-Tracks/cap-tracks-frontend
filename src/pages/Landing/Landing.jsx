import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <img src="https://www.wmata.com/about/news/images/2021-Inauguration-System-Map-1_1.jpg" alt="" />
    </main>
  )
}

export default Landing
