import { useState } from "react"

function TodoListi() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", completed: false },
    { id: 2, text: "낮잠자기", completed: false },
    { id: 3, text: "게임하기", completed: false },
  ])

  // 특정 할일 완료 상태 변경
  const toogleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  return (
    <div>
      <h2>할일 목록</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <spen style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </spen>
            <button onClick={() => toogleTodo(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default TodoListi