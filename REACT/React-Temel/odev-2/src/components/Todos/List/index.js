import React from 'react'

function List({todos,markTodo,removeTodo}) {
   

    return (
        <div>
            <ul className="list">
                {
                    todos.map((todo,index)=>(
                        <li key={index}>
                    <span><button className="btn-mark" onClick={() => markTodo(index)}>✓</button></span>
                          <span style={{textDecoration: todo.isDone ? "line-through" : "" }}>  {todo.item}</span>
                         <span><button className="btn-remove" onClick={() => removeTodo(index)}>✕</button></span> 
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List;
