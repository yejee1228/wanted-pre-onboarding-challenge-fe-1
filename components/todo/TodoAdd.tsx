import React, { useState } from 'react';
import * as T from 'lib/styles/todoStyle'
import { AiOutlinePlus } from 'react-icons/ai';
import { getToken } from 'lib/util/token';
import axios from 'axios';

const TodoAdd = () => {
    const [todoAdd, setTodoAdd] = useState(false)
    const [inputs, setInputs] = useState({
        title: '',
        content: '',
    })
    const { title, content } = inputs

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const config: object = {
            headers: {
                Authorization: getToken()
            }
        }
        const data = { title: inputs.title, content: inputs.content }
        axios.post(`http://localhost:8080/todos`, data, config)
            .then(data => {
                if (data.data.data) {
                    setTodoAdd(false)
                    setInputs({
                        title: '',
                        content: '',
                    })
                }
            })
    }
    return (
        <>
            {
                todoAdd
                    ?
                    <T.TodoForm onSubmit={onSubmit}>
                        <div>
                            <p>title: </p>< input type="text" name="title" value={title} onChange={inputHandler} /><br />
                            < textarea name="content" value={content} onChange={inputHandler} />
                        </div>
                        < button type="submit" onClick={onSubmit} > <span>입력</span> </button >
                    </T.TodoForm >
                    :
                    <T.TodoAddButton onClick={() => setTodoAdd(true)}><AiOutlinePlus />추가하기</T.TodoAddButton>
            }
        </>

    );
};

export default TodoAdd;