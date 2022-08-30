import React, { useState } from 'react';
import * as T from 'lib/styles/todoStyle'
import { ITodo } from 'lib/types';
import { useDeleteTodo, useUpdateTodo } from './queries';

const TodoDetail = (todo: ITodo) => {
    const { title, content } = todo
    const [editInputs, setEditInputs] = useState({
        editTitle: title,
        editContent: content
    })
    const { editTitle, editContent } = editInputs
    const [isEditMode, setIsEditMode] = useState(false)
    const data = {
        title: editTitle,
        content: editContent
    }
    const { mutateAsync } = useUpdateTodo(todo.id)
    const deleteId = useDeleteTodo(todo.id)

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setEditInputs({
            ...editInputs,
            [name]: value
        })
    }
    const toggleEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsEditMode(!isEditMode)
    }

    const onSubmit = (e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutateAsync(data)
            .then(res => {
                if (res.data.id === todo.id) {
                    setIsEditMode(false)
                }
            })
    }
    const removeTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (confirm('삭제하시겠습니까?')) {
            deleteId.mutateAsync()
                .then(res => {
                    if (res.data === null) {
                        setIsEditMode(false)
                    }
                })
        } else {
            return
        }
    }
    return (
        <>
            {todo.id !== '' &&
                <T.TodoDetail onSubmit={onSubmit}>
                    {
                        isEditMode
                            ?
                            <>
                                <div>
                                    <p>title: </p>< input type="text" name="editTitle" value={editTitle} onChange={inputHandler} /><br />
                                    < textarea name="editContent" value={editContent} onChange={inputHandler} />
                                </div>
                                <div>
                                    < button type="submit" onSubmit={onSubmit} disabled={(editTitle === '' || editContent === '')}> <span>완료</span> </button >
                                    < button onClick={toggleEditMode}> <span>취소</span> </button >
                                </div>
                            </>
                            :
                            <>
                                <div>
                                    <h3>{title}</h3>
                                    <div>
                                        {content}
                                    </div>
                                </div>
                                <div>
                                    < button onClick={toggleEditMode} > <span>수정</span> </button >
                                    < button onClick={removeTodo}> <span>삭제</span> </button >
                                </div>
                            </>
                    }
                </T.TodoDetail >
            }
        </>
    );
};

export default TodoDetail;