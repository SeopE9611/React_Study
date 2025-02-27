import { memo } from "react";
import { useState } from "react"

function Parent() {
  const [count, setCount] = useState(0);
  console.log('부모 컴포넌트 렌더링');

  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <button onClick={() => setCount(count + 1)}>부모 카운트 증가</button>
      <MemoizedChild />
    </div>
  )
}

// React.memo() 적용 (불필요한 리렌더링 방지)
function Child() {
  console.log('자식 컴포넌트 렌더링');

  return <h3>자식 컴포넌트</h3>
}

const MemoizedChild = memo(Child)
export default Parent
