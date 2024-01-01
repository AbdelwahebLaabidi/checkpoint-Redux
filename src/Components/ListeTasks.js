import { useSelector } from "react-redux"
import CardTasks from "./CardTasks"

const ListeTasks=()=>{

const tasks = useSelector(state => state.tasks)   
const FilListe = useSelector(state => state.FilListe)
    return(
        
        <div>
            
            
            {
                FilListe == "ALL" ? 
                tasks.map((el,i,t)=> <CardTasks el={el}/>) 
                : 
                FilListe == "DONE" ? 
                tasks.filter((el,i,t)=> el.isDone == true).map((el,i,t)=> <CardTasks el={el}/>) 
                :
                tasks.filter((el,i,t)=> el.isDone == false).map((el,i,t)=> <CardTasks el={el}/>)
            }

        </div> 
    )
}

export default ListeTasks