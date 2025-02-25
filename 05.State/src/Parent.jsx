import { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <button onClick={() => setCount(count + 1)}>부모 카운트 증가</button>
      <Child />
    </div>
  )
}

function Child() {
  console.log('자식 컴포넌트 렌더링');
  return <h3>자식컴포넌트 입니다.</h3>
}

export default Parent