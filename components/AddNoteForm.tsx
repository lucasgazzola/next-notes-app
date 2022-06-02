import { NextComponentType } from "next";
import { useState } from "react";
import { Note } from "../interfaces/Note";
import { db } from "../services/firebase";
import { addDoc, collection } from "firebase/firestore";

const AddNoteForm: NextComponentType = () => {
  const initialNote: Note = {
    title: "",
    content: "",
    date: "",
  }
  const [note, setNote] = useState<Note>(initialNote);
  const { title, content } = note;

  const updateDB = async (note: Note) => {
    try {
      const docRef = await addDoc(collection(db, "notes"), note);
      const id = docRef.id;
      console.log(`Fue almacenado en el id: ${id}`);
    } catch (e) {
      console.log(e);
    } finally {
      setNote(initialNote);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateNote();
    await updateDB(note);
    setNote(initialNote);
  }

  const updateNote = async () => {
    const date = new Date().toLocaleString();
    setNote({
      title,
      content,
      date,
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        type="text"
        value={title}
        name="title"
        placeholder="Title"
      />
      <input
        onChange={handleChange}
        type="text"
        value={content}
        name="content"
        placeholder="Content"
      />
      <button
        type="submit"
      >Add Note</button>
    </form>
  )
}


export default AddNoteForm