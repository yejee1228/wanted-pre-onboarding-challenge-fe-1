import React, { useState } from 'react';
import { AiFillEdit, AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { ITodo } from 'lib/types';
import * as T from 'lib/styles/todoStyle';
import axios from 'axios';
import { getToken } from 'lib/util/token';

const TodoItem = (todo: ITodo) => {
    const { id, title, content } = todo
    const [editInputs, setEditInputs] = useState({
        editTitle: title,
        editContent: content
    })
    const { editTitle, editContent } = editInputs
    const [editMode, setEditMode] = useState(false);
    const config: object = {
        headers: {
            Authorization: getToken()
        }
    }
    const data = {
        title: editTitle,
        content: editContent
    }
    const API = {
        updateTodo: (id: string) =>
            axios.put(`http://localhost:8080/todos/${id}`, data, config),
        deleteTodo: (id: string) =>
            axios.delete(`http://localhost:8080/todos/${id}`, config),
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setEditInputs({
            ...editInputs,
            [name]: value
        })
    }

    const updateEdit = () => {
        console.log(config)
        API.updateTodo(id)
            .then(data => {
                if (data.data.id === todo.id) {
                    setEditMode(false)
                }
            })
    }

    const remove = () => {
        API.deleteTodo(id)
            .then(data => {
                if (data.data === null) {
                    setEditMode(false)
                }
            })
    }

    return (
        <>
            <T.TodoItem>
                <span onClick={() => setEditMode(!editMode)}>{title}</span>
                <i onClick={() => setEditMode(!editMode)}>
                    {editMode ?
                        <AiFillEdit />
                        :
                        <AiOutlineEdit />
                    }
                </i>
                <i onClick={remove}>
                    <AiOutlineCloseCircle />
                </i>
            </T.TodoItem >
            {editMode &&
                <T.TodoDetail>
                    <div>
                        <input type="text" name="editTitle" value={editTitle} onChange={inputHandler} /><br />
                        <input type="text" name="editContent" value={editContent} onChange={inputHandler} />
                    </div>
                    <button onClick={updateEdit}>수정</button>
                </T.TodoDetail>
            }
        </>
    );
};

export default TodoItem;