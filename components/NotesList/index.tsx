import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from "../../services/firebase";
import { NoteType } from "../../interfaces/INote";
import Note from "../Note/index";


export default function NotesList() {
  const [notes, setNotes] = useState<Array<NoteType>>([]);

  useEffect(() => {
    onSnapshot(collection(db, "notes"), (collection) => {
      const notes = collection.docs.map(doc => doc.data());
      setNotes(notes);
    });
  }, [])

  return (
    <div>
      <h1>Notes List</h1>
      {
        notes.map((note: NoteType) => <Note key={note.date} note={note} />)
      }
    </div>
  )
}