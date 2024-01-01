import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTasks } from "../Redux/Actions"

const AddTasks=()=>{

    const [title,setTitle] = useState('')

        const dispatch= useDispatch()
        const handleAdd=()=>{
            dispatch(addTasks({title,isDone : false, id : Math.random()}))
            setTitle('')
        }
        
    return(
        <div>   
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text"/>
            <button onClick={()=> handleAdd()}>add</button>
        </div>
    )
}

export default AddTasks