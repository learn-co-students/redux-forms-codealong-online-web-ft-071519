export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log(state)
  

  switch (action.type){
    case "ADD_TODO":
        console.log("reducer received this action:", action);
        console.log(action.payload)
        console.log({ todos: state.todos.concat(action.payload.text) });
        return { todos: state.todos.concat(action.payload.text)}
    default:
      return state

  }
}
