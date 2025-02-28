// App.jsx

import "./App.css" // css 파일 import
import Header from "./Header" // 헤더 컴포넌트 import
import ButtonCustom from "./Button" // Button.jsx import

function App() {
  return (
    <div className="container">
      <Header /> {/* Header 컴포넌트 */}
      <h2 className="title">일반 CSS 파일 적용</h2>
      <button className="button">버튼</button>
      <ButtonCustom type="primary" /> {/* type이라는 props를 받아서 스타일 결정 (type이 primary이면 button primary 클래스 추가) */}
      <ButtonCustom type="secondary" /> {/* type이라는 props를 받아서 스타일 결정 (그 외의 경우 button secondary 클래스 추가) */}
    </div>
  )
}
export default App
