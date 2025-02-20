// Greeting.jsx

import PropTypes from "prop-types"
function Greeting({ name, age, job }) {
  return (
    <>
      <h1>안녕하세요 {name || "게스트"}님</h1>
      <p>나이: {age || "정보가 없습니다."}</p>
      <p>직업: {job || "정보가 없습니다."}</p>
    </>
  )
}

// propTypes
Greeting.propTypes = {
  name: PropTypes.string, // name은 문자열 타입
  age: PropTypes.number, // age는 숫자 타입
  job: PropTypes.string, // job은 문자열 타입
}

export default Greeting