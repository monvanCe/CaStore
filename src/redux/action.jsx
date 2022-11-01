import { ADD,DELETE,UPDATE } from "./initialState";

export const addAction =()=>({
    type:ADD
})

export const deleteAction =()=>({
    type:DELETE
})

export const updateAction =(variable)=>({
    type:UPDATE,
    variable
})