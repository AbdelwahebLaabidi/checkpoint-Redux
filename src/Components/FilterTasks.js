import { useDispatch } from "react-redux"
import { changeListe } from "../Redux/Actions"

const FilterTasks=()=>{

    const dispatch=useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(changeListe("ALL"))} >All</button>
            <button onClick={()=>dispatch(changeListe("DONE"))}>done</button>
            <button onClick={()=>dispatch(changeListe("NOTDONE"))} >Not Done</button>
        </div>
    )
}

export default FilterTasks