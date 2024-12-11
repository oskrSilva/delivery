import { create } from 'zustand';

interface TodosState{
    todo: String
}

export const useTodosState = create<TodosState>(()=>({
    todo: "Crear estado global"
}))