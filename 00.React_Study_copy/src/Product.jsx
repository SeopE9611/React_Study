
function Product({ name, price, model, imageUrl }) { // Product 컴포넌트를 정의
  function Order() {
    alert(`${name} ${model}을 주문하였습니다.`);
  }
  return (
    <li>
      <h2>{`${name} ${model}`}</h2>
      <img src={imageUrl} alt="" style={{ width: "200px" }} />
      <p>가격:{price}</p>
      <button onClick={Order}>주문하기</button>
    </li>
  )
}

export default Product; // Product 컴포넌트를 내보냄