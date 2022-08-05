import React, { useState } from 'react';
import TodoItem from './TodoItem';
import * as T from 'lib/styles/todoStyle';
import axios from 'axios';
import { getToken } from 'lib/util/token';

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            title: '',
            content: '',
            id: '',
            createdAt: '',
            updatedAt: ''
        }
    ])
    const config: object = {
        headers: {
            Authorization: getToken()
        }
    }
    axios.get(`http://localhost:8080/todos`, config)
        .then(res => {
            setTodos(res.data.data)
        })
    return (
        <T.TodoList>
            <ul>
                {
                    todos.length > 0 &&
                    todos.map((todo) => <TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} createdAt={todo.createdAt} updatedAt={todo.updatedAt} />)
                }
            </ul>
        </T.TodoList>
    );
};

export default TodoList;