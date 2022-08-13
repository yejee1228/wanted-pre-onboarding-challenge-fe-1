import React, { useState } from 'react';
import * as T from 'lib/styles/todoStyle'
import { getToken } from 'lib/util/token';
import axios from 'axios';
import { ITodo } from 'lib/types';

const TodoDetail = (todo: ITodo) => {
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
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setEditInputs({
            ...editInputs,
            [name]: value
        })
    }

    const updateEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        API.updateTodo(id)
            .then(data => {
                if (data.data.data.id === todo.id) {
                    setEditMode(false)
                }
            })
    }

    const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (confirm('삭제하시겠습니까?')) {
            API.deleteTodo(id)
                .then(data => {
                    if (data.data === null) {
                        setEditMode(false)
                    }
                })
        } else {
            return
        }
    }
    const updateEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setEditMode(!editMode)
    }
    return (
        <>
            {todo.id !== '' &&
                <T.TodoDetail>
                    {
                        editMode
                            ?
                            <>
                                <div>
                                    <p>title: </p>< input type="text" name="editTitle" value={editTitle} onChange={inputHandler} /><br />
                                    < textarea name="editContent" value={editContent} onChange={inputHandler} />
                                </div>
                                <T.ButtonBox>
                                    < button onClick={updateEdit} > <span>완료</span> </button >
                                    < button onClick={updateEditMode}> <span>취소</span> </button >
                                </T.ButtonBox>
                            </>
                            :
                            <>
                                <div>
                                    <h3>{title}</h3>
                                    <div>
                                        {content}
                                    </div>
                                </div>
                                <T.ButtonBox>
                                    < button onClick={updateEditMode} > <span>수정</span> </button >
                                    < button onClick={remove}> <span>삭제</span> </button >
                                </T.ButtonBox>
                            </>
                    }
                </T.TodoDetail >
            }
        </>
    );
};

export default TodoDetail;