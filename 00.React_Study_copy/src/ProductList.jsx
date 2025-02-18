import Product from './Product';
import "./styles.css"
function ProductList() {
  const products = [
    { id: 1, name: "맥북", model: "Air", price: "1,500,000", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png" },
  ]
  return (
    <div>
      <h1> 상품 목록</h1>
      <ul>
        {products.map((product) => (
          <Product key={product.id} name={product.name} model={product.model} price={product.price} imageUrl={product.imageUrl} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList; // ProductList 컴포넌트를 내보냄