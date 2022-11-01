import { ADD,DELETE,UDATE,initialstate } from "./initialState"

export const reducer =(state=initialstate,action)=>{
    switch (action.type){
        case ADD :{
            state.data=state.data+1
        }
        case DELETE :{
            state.data=state.data-1
        }
        case DELETE :{
            state.data=action.variable
        }

    }

}