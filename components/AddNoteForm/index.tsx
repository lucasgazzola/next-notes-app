import { NextComponentType } from "next";
import { useEffect, useState } from "react";
import { INote } from "../../interfaces/INote";
import { db } from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import styles from './AddNoteFrom.module.css'
import Spinner from "../Spinner/index";

const AddNoteForm: NextComponentType = () => {
  const initialNote: INote = {
    title: "",
    content: "",
    date: "",
  };

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [note, setNote] = useState<INote>(initialNote);
  const [error, setError] = useState<FirebaseError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function sleep(fn: Function) {
    await timeout(2000);
    return fn();
  }

  useEffect(() => {
    async function saveNote() {
      setIsLoading(true);
      try {
        const docRef = await addDoc(collection(db, "notes"), note);
        const id = docRef.id;
        console.log(`Fue almacenado en el id: ${id}`);
        setIsSubmitted(true);
        setIsLoading(false);
        await sleep(() => setIsSubmitted(false));
      } catch (e: unknown) {
        setIsLoading(false);
        if (e instanceof FirebaseError) {
          setError(e);
          await sleep(() => setError(null));
        }
        console.log(e);
      } finally {
        setNote(initialNote);
      }
    }
    if (note.date !== '') {
      saveNote();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note])


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const date = new Date().toLocaleString();
    setNote({
      title,
      content,
      date,
    });
  }

  return (
    <div className={styles.formContainer}>
      <header>
        <h2 className={styles.title}>Notes app</h2>
      </header>
      {
        // TODO: ADD BACKGROUND 
      }
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        {
          error
            ? <p className={styles.error}>Error</p>
            : null
        }
        <input
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          autoComplete='off'
        />
        <textarea
          className={styles.textarea}
          onChange={(e) => setContent(e.target.value)}
          value={content}
          name="content"
          placeholder="Content"
          autoComplete='off'
        />
        <button
          className={styles.button}
          type="submit"
        >
          <span>Save</span>
        </button>

        {
          isLoading
            ? <Spinner />
            : null
        }
        {
          isSubmitted
            ? <p className={styles.submitted}>Submitted</p>
            : null
        }
      </form >
    </div>
  )
}


export default AddNoteForm