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
      <button onClick={handleRandom}>次に行うタスクをランダムに選ぶ</button>
      <div>
        次に行うタスク：
        {todoName}
      </div>
    </div>
  );
};
