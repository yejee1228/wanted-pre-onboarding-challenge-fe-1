import React, { useEffect, useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { TodoWrap } from "lib/styles/todoStyle";
import Header from "./Header";

const Todo = () => {
  /* const [todos, setTodos] = useState([]);

 useEffect(() => {
   fetch("http://localhost:4000/plans")
     .then((res) => res.json())
     .then((res) => setTodos(res));
 }, []);
 const onDel = (id) => {
   fetch(`http://localhost:4000/plans/${id}`, {
     method: "DELETE", //실제 데이터 삭제됨.
   });
   setTodos(todos.filter((todo) => todo.id !== id)); //화면단
 };

 const fetchPlan = async (id) => {
   const res = await fetch(`http://localhost:4000/plans/${id}`);
   const data = await res.json();
   return data;
 };

 const onToggle = async (id) => {
   const togglePlan = await fetchPlan(id);
   const updatePlan = { ...togglePlan, done: !togglePlan.done };

   const res = await fetch(`http://localhost:4000/plans/${id}`, {
     method: "put",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify(updatePlan),
   });
   //setPlans(plans.map(plan=>plan.id === id ? {...plan, done : !plan.done } : plan))
   getToggle();
 };

 const getToggle = () => {
   const config = { method: "get" };
   fetch("http://localhost:4000/plans/", { config })
     .then((res) => res.json())
     .then((res) => setTodos(res));
 };
 const onAdd = (form) => {
   //form.id = noRef.current++; 자동으로 생성됨
   fetch("http://localhost:4000/plans/", {
     method: "post",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify(form),
   })
     .then((res) => res.json())
     .then((res) => setTodos([...todos, res])); 
};*/
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
