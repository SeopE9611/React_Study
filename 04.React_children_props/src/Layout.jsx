// Layouy.jsx

function Layout({ children }) {
  return (
    <div>
      <header>헤더 부분</header>
      <main>{children}</main> {/* 이 부분에 동적인 콘텐츠가 들어감 */}
      <footer>푸터 부분</footer>
    </div>
  )
}

export default Layout