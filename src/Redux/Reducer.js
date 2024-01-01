import { ADDTASKS, CHANGELISTE, DELETETASKS, DONETASKS } from "./ActionsTypes"

const initialState = {
    tasks : [{title : "Smocking", isDone : false, id : Math.random()},
            {title : "Buy Smocking", isDone : false, id : Math.random()},
            {title : "Quit Smocking", isDone : false, id : Math.random()}],

    FilListe : "ALL"
}


const Reducer =(state = initialState, action)=>{
    switch (action.type) {
        
        case ADDTASKS : return {...state, tasks : [...state.tasks, action.payload ] }
        case DELETETASKS : return { ...state, tasks : state.tasks.filter((el,i,t)=> el.id != action.payload)}
        case DONETASKS : return  { ...state, tasks : state.tasks.map((el,i,t)=> el.id == action.payload ? {...el, isDone : !el.isDone  }: el)}
        case CHANGELISTE : return { ...state, FilListe : action.payload}
        default: return state
    }
}

export default Reducer