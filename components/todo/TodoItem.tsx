import React, { useMemo, useState, useEffect } from 'react';
import { AiFillEdit, AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { ITodo } from 'lib/types';
import { useRouter } from 'next/router';
import * as T from 'lib/styles/todoStyle';
import axios from 'axios';
import { getToken } from 'lib/util/token';

const TodoItem = (todo: ITodo) => {
    const router = useRouter()
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

    const current = useMemo(() => {
        return router.query.page !== undefined ? router.query.page : ''
    }, [router.query]);

    useEffect(() => {
        console.log('effect')
        if (current === id) {
            setEditMode(true)
        } else {
            setEditMode(false)
        }
    }, [current]);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setEditInputs({
            ...editInputs,
            [name]: value
        })
    }
    const select = () => {
        if (!editMode) {
            if (current === id) {
                setEditMode(true)
            } else {
                router.push(`/todo?page=${id}`)
            }
        } else {
            setEditMode(false)
        }
    }

    const updateEdit = () => {
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
                <span onClick={select}>{title}</span>
                <i onClick={select}>
                    {(current === id && editMode) ?
                        <AiFillEdit />
                        :
                        <AiOutlineEdit />
                    }
                </i>
                <i onClick={remove}>
                    <AiOutlineCloseCircle />
                </i>
            </T.TodoItem >
            {(current === id && editMode) &&
                <T.TodoDetail>
                    <div>
                        <p>title: </p>< input type="text" name="editTitle" value={editTitle} onChange={inputHandler} /><br />
                        < textarea name="editContent" value={editContent} onChange={inputHandler} />
                    </div>
                    < button type="submit" onClick={updateEdit} > <span>입력</span> </button >
                </T.TodoDetail >
            }
        </>
    );
};

export default TodoItem;