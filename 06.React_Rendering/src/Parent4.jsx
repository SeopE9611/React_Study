import { useCallback } from "react";
import { memo } from "react";
import { useState } from "react"

function Parent() {
  const [count, setCount] = useState(0);

  // useCallback 사용하여 함수가 새로 생성되지 않도록 최적화
  const handleClick = useCallback(() => {
    console.log('버튼 클릭됨');

  }, []);
  console.log('부모 컴포넌트 렌더링');

  return (
    <div>
      <h2>부모 컴포넌트 카운트 {count}</h2>
      <button onClick={() => setCount(count + 1)}>부모 카운트 증가</button>
      <Child handleClick={handleClick} />
    </div>
  )
}

const Child = memo(({ handleClick }) => {
  console.log("자식 컴포넌트 렌더링");
  return <button onClick={handleClick}>자식 버튼</button>;
});

export default Parent;