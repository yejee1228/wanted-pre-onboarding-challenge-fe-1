import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { TodoWrap } from "lib/styles/todoStyle";
import Header from "./Header";

const Todo = () => {
  return (
    <>
      <Header />
      <TodoWrap>
        <TodoAdd />
        <TodoList />
      </TodoWrap>
    </>
  );
};

export default Todo;
