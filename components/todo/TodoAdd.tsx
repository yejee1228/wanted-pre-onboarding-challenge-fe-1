import React, { useState } from 'react';
import * as T from 'lib/styles/todoStyle'
import { AiOutlinePlus } from 'react-icons/ai';
import { useCreateTodo } from './queries';

const TodoAdd = () => {
    const [todoAdd, setTodoAdd] = useState(false)
    const [inputs, setInputs] = useState({
        title: '',
        content: '',
    })
    const { title, content } = inputs
    const { mutateAsync } = useCreateTodo()

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        mutateAsync(inputs)
        setInputs({ title: '', content: '' })
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
                        <div>
                            < button type="submit" onClick={onSubmit} disabled={(title === '' || content === '')}> <span>입력</span> </button >
                            < button onClick={() => setTodoAdd(false)} > <span>취소</span> </button >
                        </div>
                    </T.TodoForm >
                    :
                    <T.TodoAddButton onClick={() => setTodoAdd(true)}><AiOutlinePlus />추가하기</T.TodoAddButton>
            }
        </>

    );
};

export default TodoAdd;