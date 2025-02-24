import { useState } from "react"

function Counter() {
  // count 상태(state)와 이를 변경할 수 있는 setCount 함수 선언
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>현재 카운트 : {count}</h2>
      {/* setCount를 사용하여 state 업데이트 */}
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  )
}

export default Counter