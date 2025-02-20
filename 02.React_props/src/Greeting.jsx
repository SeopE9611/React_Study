// Greeting.jsx

function Greeting({ name, age, job }) {
  return (
    <>
      <h1>안녕하세요 {name}님</h1>
      <p>나이: {age}</p>
      <p>직업: {job}</p>
    </>
  )
}

export default Greeting