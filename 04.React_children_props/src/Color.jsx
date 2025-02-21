// Color.jsx - PropTypes 추가

import PropTypes from "prop-types"

function Color({ children, backgroundColor }) {
  return (
    <div style={{ backgroundColor, padding: "20px", borderRadius: "10px" }}>
      {children} {/* 안에 어떤 내용이든 들어갈 수 있음 */}
    </div>
  );
}

Color.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string // backgroundColor는 css 속성이므로 string
}

export default Color;
