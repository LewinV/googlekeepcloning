import { useState } from "react";
import {NoteI} from './types';

export default function NoteForm({ addOrEdit }: any){

    const initialStateValues: NoteI = {
        id: '',
        title: '',
        description: '',
        tags: []
    }

    const [note, setNote] = useState<NoteI>(initialStateValues)

    const handleSumit = (e: any) => {
        e.preventDefault();
        addOrEdit(note);
        setNote({...initialStateValues});
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setNote({...note, [name]: value});
    }

    return(
        <form onSubmit={handleSumit}>
            <input type="text" name="title" placeholder="Title" onChange={handleInputChange} value={note.title}/>
            <textarea rows={3} name="description" placeholder="Description" onChange={handleInputChange} value={note.description}></textarea>
            <button type="submit" onChange={handleInputChange}>Add</button>
        </form>
    )
}