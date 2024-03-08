"use client"; // is a server component

import React, {useState, useEffect} from "react";
import { useRouter, useSearchParams } from "next/navigation";

const tags:string[] = ['personal', 'home', 'shopping', 'school']

const getNote = async(id : any) => {
    const data = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`)
    const response = await data.json();
    return response;
}

const NoteForm = () => {
    const router = useRouter();
    const id = useSearchParams().get("id");
    const [note, setNote] = useState<{
            title: string;
            description: string;
            tags: string[];
            done: boolean;
          }>({
            title: "",
            description: "",
            tags: [],
            done: false
          });

    const handleNote = async () => {
        const data = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id || ''}`,
        {
            method: id ? 'PATCH' : 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })

        setNote({
            title: "",
            description: "",
            tags: [],
            done: false
        });

        router.push('/')
    };

    useEffect(() => {
        if(id){
            getNote(id).then((data) => {
                setNote({
                    title: data.title,
                    description : data.description,
                    tags: data.tags,
                    done: data.done
                })
            })
        }
    });

    return <div className="flex flex-col w-96">
        <input type="text" value={note.title} placeholder="Title" 
        className="border px-2 rounded-sm w-full"
        onChange={(e) => {
            setNote({
                ...note,
                title: e.target.value,
            })
        }}/>
        <textarea name="" id="" 
        value={note.description} placeholder="Description" 
        className="border px-2 rounded-sm w-full my-3"
        onChange={(e) => {
            setNote({
                ...note,
                description: e.target.value,
            })
        }}></textarea>
        <div>
            {tags.map((tag, idx) => {
                const isActive = note.tags.includes(tag);
                return (
                    <span className={`${
                        isActive ? "bg-gray-900 text-white" : "text-black"
                    } mb-2 border cursor-pointer px-2 py-1 rounded-sm
                    mr-2`}
                    key={idx} onClick={() => {
                        setNote({
                            ...note,
                            tags: isActive ? note.tags.filter(t => t !== tag) :
                             [...note.tags, tag],
                        })
                    }}>
                        {tag}
                    </span>
                )
            })}
        </div>
        <div>

        </div>
        <button onClick={handleNote} className="bg-gray-900 text-white px-2 py-1 rounded-sm mt-5 w-32">
            {id ? 'Update' : 'Create'} Note
        </button>
    </div>
}

export default NoteForm;