function Profile({ user }) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>나이: {user.age}</p>
      <p>직업: {user.job}</p>
    </>
  )
}

export default Profile