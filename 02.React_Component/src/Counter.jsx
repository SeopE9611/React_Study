function Counter() {
  let count = 0;

  function btnClick() {
    count += 1;
    console.log('현재 카운트:', count);
  }

  return (
    <>
      <p>카운트 : {count}</p>
      <button onClick={btnClick}> +1 증가 </button>
    </>
  )
}

export default Counter