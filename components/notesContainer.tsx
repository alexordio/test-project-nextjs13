import React from "react";

import Note from "./note";

const getData = async(type: any) => {
    const data = await fetch(`http://127.0.0.1:8090/api/collections/notes/records?filter=tags ~ '${type || ''}'`,
    {
        cache: "no-cache",
    }    
    )
    const response = await data.json();
    return response;
}

const NotesContainer = async({type}: any) => {

    const notes = await getData(type);

    return (
        <div className="grid grid-cols-3 w-full gap-4 p-4 self-start">
            {notes.items.map((note: any, idx: any) =>{
                return <Note key={idx} {...note}></Note>
            }
            )}
        </div>
    )
}

export default NotesContainer;