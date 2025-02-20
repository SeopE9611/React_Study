// UserList.jsx

import PropTypes from "prop-types";
function UserList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

// propTypes
UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired, // 배열 요소 검사
}

export default UserList;
