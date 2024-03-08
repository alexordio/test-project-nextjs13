import React from "react";
import Crud from "./crud";


const Note = async({title, description, done, tags, id}: any) => {
    return (
        <div className="bg-amber-200 p-5 rounded-sm self-start">
            <h2 className={`font-bold text-2xl text-gray-700 ${done && "line-through"}`}>{title}</h2>
            <p className={`my-3 ${done && "line-through"}`}>{description}</p>
            <div>
                {tags.map((tag: any, idx: any)=>{
                    return (
                        <span key={idx} className="bg-gray-700 text-white py-1 px-1 m-2">{tag}</span>
                    )
                })}
            </div>
            <div className="mt-3">
                <Crud done={done} id={id}></Crud>
            </div>
        </div>
    )
}

export default Note;