import React from 'react';
import TodoItem from './TodoItem';
import * as T from 'lib/styles/todoStyle';
import { useTodos } from './queries';
import { getToken } from 'lib/util/token';

const TodoList = () => {
    const { data: todos } = useTodos(getToken())

    return (
        <T.TodoList>
            <ul>
                {
                    (todos !== undefined && todos?.data.length > 0) &&
                    todos?.data.map((todo) => <TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} createdAt={todo.createdAt} updatedAt={todo.updatedAt} />)
                }
            </ul>
        </T.TodoList>
    );
};

export default TodoList;