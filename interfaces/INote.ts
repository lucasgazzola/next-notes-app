import { DocumentData } from "firebase/firestore"

export interface INote {
  title: string;
  content: string;
  date: string;
}

export type NoteType = DocumentData | INote