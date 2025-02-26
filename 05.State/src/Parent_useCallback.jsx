import { useState, useCallback, memo } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  // useCallback을 사용하지 않으면 부모가 리렌더링될 때마다 handleClick이 새로 생성됨
  const handleClick = useCallback(() => {
    console.log("handleClick 함수는 재사용됨!");
  }, []);

  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <button onClick={() => setCount(count + 1)}>부모 카운트 증가</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

const Child = memo(({ handleClick }) => {
  console.log("자식 컴포넌트 렌더링됨!");
  return <button onClick={handleClick}>자식 버튼</button>;
});

export default Parent;
