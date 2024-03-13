// import logo from './logo.svg';
import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import { NextTodo } from "./NextTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };


  return (
    <div>
      <div className="w-full h-screen bg-gray-100 pt-8">
        <div class="bg-white p-3 max-w-md mx-auto">
          <div class="text-center">
            <h1 class="text-3xl font-bold">Todo App <span className="text-sm">by React</span></h1>
            <div class="flex mt-4">
              <input type="text" ref={todoNameRef} className="w-80 border-b-2 border-gray-500 text-black" placeholder="Todoを記入" />
              <div>
                <button onClick={handleAddTodo} className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex">追加</button>
              </div>
            </div>
            <div className="container flex justify-center">
              <div className="pt-4 w-80">
                <TodoList todos={todos} toggleTodo={toggleTodo} />
              </div>
            </div>
            <div>
              <button onClick={handleClear} className="text-red-500 border-2 border-red-500 p-2 rounded-l mt-4">選択したTodoの削除</button>
            </div>
            <div className="text-red-500 text-xl my-4">残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
            <hr />
            <NextTodo todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
  }

export default App;
