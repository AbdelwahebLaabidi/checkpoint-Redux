import { useDispatch } from "react-redux"
import { deleteTasks, doneTasks } from "../Redux/Actions"

const CardTasks=({el})=>{


    const dispatch=useDispatch()

    return(
        <div>
                <h3 className={el.isDone && 'pop'} >{el.title}</h3>
                <button onClick={()=>dispatch(doneTasks(el.id))}>Done</button>
                <button onClick={()=> dispatch(deleteTasks(el.id))}>Delete</button>
        </div>
    )
}

export default CardTasks