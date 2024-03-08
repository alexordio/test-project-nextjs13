import React from "react";

//Components
import NoteForm from "@/components/noteForm";

const ADD = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-3">Add a Note</h1>
            <NoteForm></NoteForm>
        </div>

    )
}

export default ADD;