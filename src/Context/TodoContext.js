import React, { createContext, useContext } from "react";
 export const TodoContext = createContext({
    todos:[
        {
            id:1, //to make a refer of todos to access them 
            todo:"Todo msg", //basically it will add our task
            comleted:false,
    
        }
     ],
     addTodo:(todo)=>{},
     updateTodo:(id, todo)=>{}, //updation required 2 props one id ,add todo
     deleteTodo:(id)=>{}, //here we need only one props which need to be deleted
     todoStatus:(id)=>{}

 });

 export const useTodo=()=>{
    return useContext(TodoContext) // This gives context of todo by help of useContext hook
 }

 export const TodoContextProvider = TodoContext.Provider //provider gives us wraping access 
 

 