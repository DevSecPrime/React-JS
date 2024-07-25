import { createContext, useContext } from "react";


export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "To do Msg",
            completed: false
        }
    ],

    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { }

})



export const ToDoContextProvider = ToDoContext.Provider


// created a custoime Hook...
export const useToDoContext = () => {
    return useContext(ToDoContext)
}