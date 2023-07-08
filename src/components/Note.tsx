export default function Note({note, deleteNote}: any){
    return(
        <div className="border mb-5 w-[40%]">
            <div>
                <h1 className="">{note.title}</h1>
                <p>{note.description}</p>
            </div>
            <div>
                <button className="bg-red-600" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
        </div>
    )
}