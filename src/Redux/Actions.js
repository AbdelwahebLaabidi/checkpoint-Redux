import { ADDTASKS, CHANGELISTE, DELETETASKS, DONETASKS } from "./ActionsTypes"

export const addTasks=(payload)=>{
return(
    {
    type : ADDTASKS,
    payload

        }
)}


export const deleteTasks=(payload)=>{
    return(
        {
            type : DELETETASKS,
            payload
        }
    )
}

export const doneTasks=(payload)=>{
    return(
        {
            type : DONETASKS,
            payload
        }
    )
}

export const changeListe=(payload)=>{
    return( 
        {
            type : CHANGELISTE,
            payload
        }
        )
}