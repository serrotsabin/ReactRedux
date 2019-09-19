export const increment = ()=>{
    return{
        type: "INCREMENT"
    }
}

export const decrement = ()=>{
    return{
        type: "DECREMENT"
    }
}

export const addTodo = (todo)=>{
    return{
        type: "ADD_TODO",
        payload: todo 
    }
}

export const removeTodo = (id)=>{
    return{
        type: "REMOVE_TODO",
        payload: id
    }
}

export const toogle = (id)=>{
    return{
        type: "TOOGLE",
        payload: id
    }
}