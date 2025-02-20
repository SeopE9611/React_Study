// Profile.jsx

import PropTypes from "prop-types"
function Profile({ user }) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>나이: {user.age}</p>
      <p>직업: {user.job}</p>
    </>
  )
}

// propTypes
Profile.propTypes = {
  user: PropTypes.shape({ //
    name: PropTypes.string.isRequired, // name은 필수 문자열
    age: PropTypes.number, // age는 숫자 (필수 아님)
    job: PropTypes.string, // job은 문자열 (필수 아님)
  }).isRequired, // user 객체 자체가 필수
}

export default Profile