import { useState } from "react";

function Example() {

  const [count, setCount] = useState(0);
  console.log('컴포넌트 랜더링:', { count }); // 렌더링될 떄마다 실행됨
  return (
    <div>
      <h2>카운트: {count}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  )
}
export default Example