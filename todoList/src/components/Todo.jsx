import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(todo.content);
    const remove = () => {
        onRemoveTodo(todo.id);
    }
    const updateTodo = () => {
        const request = {
            id: todo.id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }
    return (
        <div className='todo'>
            <div>
                {editable ?
                    <input type='text' className='todo-input' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} style={{
                        width: '380px'
                    }} />
                    : todo.content
                }</div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={remove} />
                {editable ?
                    <FaSave className='todo-icons' onClick={updateTodo} /> :
                    <FaEdit className='todo-icons' onClick={() => setEditable(true)} />}
            </div>

        </div>

    )
}

export default Todo