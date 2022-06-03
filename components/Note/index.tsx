import { INote } from "../../interfaces/INote";
import styles from "./Note.module.css";


export default function Note({ note }: { note: INote }) {
  return (
    <div className={styles.noteContainer}>
      <header className={styles.titleContainer}>
        <h3 className={styles.title}>{note.title}</h3>
      </header>
      <main className={styles.contentContainer}>
        <p className={styles.content}>{note.content}</p>
      </main>
      <footer className={styles.footer}>
        <p className={styles.date}>{note.date}</p>
      </footer>
    </div>
  )
}