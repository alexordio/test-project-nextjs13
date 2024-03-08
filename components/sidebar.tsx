import Link from "next/link";
import React from "react";

const getData = async () => {
    const data = await fetch(
        "http://127.0.0.1:8090/api/collections/notes/records",
        {cache: "no-cache"} //It can be good if you have to reload many times
    );
    const response = await data.json();
    return response;
}

const Sidebar = async () => {
    const notes = await getData();
    const notesByCategoryCount: any = {};

    notes?.items.forEach((note: any) => {
        note.tags.forEach((tag: string | number) => {
            if(notesByCategoryCount[tag]){
                notesByCategoryCount[tag] += 1;
            }else{
                notesByCategoryCount[tag] = 1;
            }
        }
        )
    });

    return (
        <aside className="bg-gray-100 box-border h-screen">
            <ul>
                {Object.keys(notesByCategoryCount).map((tag, index) => {
                    return <li key={index} className="px-5 py-3 border-b capitalize">
                        <Link prefetch={false} href={`/${tag}`}>{tag} ({notesByCategoryCount[tag]})</Link>
                    </li>
                })}
            </ul>
        </aside>
        )
}

export default Sidebar;