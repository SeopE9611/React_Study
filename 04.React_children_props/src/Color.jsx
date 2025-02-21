// Color.jsx

function Color({ children, backgroundColor }) {
  return (
    <div style={{ backgroundColor, padding: "20px", borderRadius: "10px" }}>
      {children} {/* 안에 어떤 내용이든 들어갈 수 있음 */}
    </div>
  );
}

export default Color;
