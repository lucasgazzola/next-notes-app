import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AddNoteForm from '../components/AddNoteForm/index'
import NotesList from '../components/NotesList/index'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A NextJS Notes App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AddNoteForm />
        <NotesList />
      </main>
    </div>
  )
}

export default Home
