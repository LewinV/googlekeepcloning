import { useEffect, useState} from "react";
import { db } from '../firebase';
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot } from "firebase/firestore";
import NoteForm from "./NoteForm";
import Note from "./Note";

export default function NoteViewer(){
    const [notes, setNotes] = useState<any[]>([]);

    const getNotes = () => {
        const q = query(collection(db, 'notes'));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const notedocs:any[] = [];

            querySnapshot.forEach(doc => {
                notedocs.push({ ...doc.data(), id: doc.id })
            })

            setNotes(notedocs);
        })

        return () => unsubscribe();
    }

    const deleteNote = async (id: any) => {
        if(window.confirm("Are you sure")) await deleteDoc(doc(db, 'notes', id))
       
    }

    useEffect(()=> {
        getNotes()
    },[])

    const addOrEdit = async (note: any) => {
        try {
            const ref = collection(db, 'notes');
            await addDoc(ref, note);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <NoteForm addOrEdit={addOrEdit} />
            {notes.map(n => <Note key={n.id} note={n} deleteNote={deleteNote} />)} 
        </>
    )
}