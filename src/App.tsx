import React, { useEffect, useState } from "react"
import {useTodosState} from './store/TodosState'

const url ="https://dummyjson.com/todos";
interface DataTodo{
  completed: boolean;
  id: number;
  todo: string;
  userId:number;
}

export const App: React.FC = () => {

  const [todosList, setTodosList] = useState<Array<DataTodo>>([])
  const todoState = useTodosState((state) => state.todo)

  useEffect(()=>{
    const getTodos = async ()=>{
      const data = await fetch(url);
      const response = await data.json();
      setTodosList(response.todos);
    }
    getTodos()
  }, [])
  console.log(todosList)
  return (
    <>
    <ul>
      {
        todosList.map((todo)=>{
          return(
            <li key={todo.id}>{todo.todo}</li>
          )
        })
      }
    </ul>
    <p>{todoState}</p>
    </>
  )
}
