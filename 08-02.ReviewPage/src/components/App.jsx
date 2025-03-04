import ReviewList from './ReviewList';
import mokData from '../mock.json';
import ReviewForm from './ReviewForm';
import { useState } from 'react';
function App() {
  const [reviews, setReviews] = useState(mokData); // 리뷰 데이터 관리
  return (
    <div>
      {/* <ReviewList items={mokData} /> items 프로퍼티에 mock 데이터 전달 */}
      <h1>영화 리뷰</h1>
      {/* 리뷰 작성폼이 들어갈 자리 */}
      <ReviewForm />
      {/* 리뷰 리스트 컴포넌트가 들어갈 자리 */}
      <ReviewList reviews={reviews} />
    </div>
  );
}
export default App;
