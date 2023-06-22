import React, { useEffect, useState} from "react";
import { db } from '../firebase';
import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot } from "firebase/firestore";

export default function NoteViewer(){
    const [notes, setNotes] = useState<any[]>([]);

    const getNotes = () => {
        const data = query(collection(db, 'notes'));
        const notedocs:any[] = [];

        onSnapshot(data, (querySnapshot) => {
            querySnapshot.forEach(doc => {
                // console.log(doc.data(), doc.id);
                notedocs.push({ ...doc.data(), id: doc.id })
            })
        });

        
        setNotes(notedocs);
    }

    useEffect(()=> {
        getNotes()
    },[])

    return (
        <>
            <h1>Note Viewer 😎</h1>
            {notes.map(n => <h1 key={n.id}>{n.title}</h1>)}
        </>
    )
}