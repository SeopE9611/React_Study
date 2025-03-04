import ReviewList from './ReviewList';
import mokData from '../mock.json';
import ReviewForm from './ReviewForm';
import { useState } from 'react';
function App() {
  const [reviews, setReviews] = useState(mokData); // 리뷰 데이터 관리

  // 리뷰 삭제 함수
  const handleDeleteReview = (id) => { // 삭제할 리뷰의 id를 전달받음
    console.log('삭제할 리뷰 id', id); 
    setReviews(reviews.filter(review => review.id !== id)); // id와 일치하는 리뷰를 제외한 새로운 배열로 리뷰 데이터 업데이트
    
  }
  return (
    <div>
      <h1>영화 리뷰</h1>
      {/* 리뷰 작성폼이 들어갈 자리 */}
      <ReviewForm />
      {/* 리뷰 리스트 컴포넌트가 들어갈 자리 */}
      <ReviewList reviews={reviews} onDelete={handleDeleteReview}/>
    </div>
  );
}
export default App;
