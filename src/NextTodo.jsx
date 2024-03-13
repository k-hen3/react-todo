import React from "react";
import { useState } from "react";

export const NextTodo = ({todos}) => {
  const [todoName, setTodoName] = useState("");

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * todos.length);
    // ランダムに選ばれたタスクの名前を取得し、stateを更新
    setTodoName(todos[randomIndex].name);

  };

  return (
    <div>
      <button onClick={handleRandom} className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4 mt-4">次に行うタスクをランダムに選ぶ</button>
      <div className="mt-4">
        次に行うタスク：
        {todoName}
      </div>
    </div>
  );
};
