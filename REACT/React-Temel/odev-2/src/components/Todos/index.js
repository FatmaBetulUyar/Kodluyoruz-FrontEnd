import {useState,useEffect} from 'react'
import List from "./List"
import Form from "./Form"
import './style.css'

function Todos() {

    const [todos,setTodos]=useState([
        {
            item:'do homework',
            isDone:false
        }]);

    // useEffect(()=>{
    //     console.log(todos)
    // },[todos])


    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };

     

      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

    return (
        <div>
           <h1>To Do List</h1>
            <Form addTodos={setTodos} todos={todos} />
            <List todos={todos} markTodo={markTodo} removeTodo={removeTodo}/>
        </div>
    )
}

export default Todos;
