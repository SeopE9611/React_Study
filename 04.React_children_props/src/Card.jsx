// Card.jsx - propTypes 추가

import Proptypes from "prop-types"

function Card({ children }) {
  return (
    <div className='card'>
      {/* children을 통해 태그 내부의 내용을 랜더링 */}
      {children}
    </div>
  )
}
// children을 `node` 타입으로 지정 (React 요소, 문자열, 숫자 등 허용)
Card.propTypes = {
  children: Proptypes.node.isRequired, // children이 필수 값임을 명시
};

export default Card