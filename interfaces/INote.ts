import { DocumentData } from "firebase/firestore"

export interface INote extends DocumentData {
  title: string;
  content: string;
  date: string;
}