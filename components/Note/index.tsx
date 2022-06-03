import styles from "./Note.module.css";
import { NoteType } from "../../interfaces/INote";


export default function Note({ note }: { note: NoteType }) {
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