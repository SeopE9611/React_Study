// Card.jsx

function Card({ children }) {
  return (
    <div className='card'>
      {/* children을 통해 태그 내부의 내용을 랜더링 */}
      {children}
    </div>
  )
}

export default Card