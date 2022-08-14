import React, { useMemo, useState, useEffect } from 'react';
import { ITodo } from 'lib/types';
import { useRouter } from 'next/router';
import * as T from 'lib/styles/todoStyle';
import TodoDetail from './TodoDetail';

const TodoItem = (todo: ITodo) => {
    const router = useRouter()
    const { id, title, content, createdAt, updatedAt } = todo
    const [isOpen, setIsOpen] = useState(false)

    const currentPageId = useMemo(() => {
        return router.query.page !== undefined ? router.query.page : ''
    }, [router.query]);

    useEffect(() => {
        if (currentPageId === id) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [currentPageId, id]);

    const toggleDetail = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
            goPage()
        }
    }
    const goPage = () => {
        router.push(`/todo?page=${id}`)
    }

    const formatDate = (dateString: string, delimiter = '-') => {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return [year, month, day].join(delimiter)
    }

    return (
        <>
            {todo.id !== '' &&
                <T.TodoItem>
                    <span onClick={toggleDetail}>{title}</span>
                    <span>등록일: {formatDate(createdAt)}</span>
                </T.TodoItem >
            }
            {isOpen &&
                <TodoDetail key={id} id={id} title={title} content={content} createdAt={createdAt} updatedAt={updatedAt} />
            }
        </>
    );
};

export default TodoItem;