import { useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import mockData from './mock.json';

function App() {
  // 초기 리뷰 데이터는 mock 파일의 데이터를 사용합니다.
  const [reviews, setReviews] = useState(mockData);
  // 정렬 상태: 'latest'는 최신순, 'best'는 별점순
  const [sortOrder, setSortOrder] = useState('latest');
  // 현재 화면에 보여질 리뷰 개수 (초기 5개)
  const [visibleCount, setVisibleCount] = useState(5);

  // 정렬 기능: sortOrder에 따라 리뷰 목록을 정렬합니다.
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortOrder === 'latest') {
      return b.createdAt - a.createdAt;
    } else { // 'best'
      return b.rating - a.rating;
    }
  });

  // 새 리뷰 추가
  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  // 리뷰 삭제
  const handleDeleteReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  // 리뷰 수정
  const handleEditReview = (updatedReview) => {
    setReviews(
      reviews.map(review => review.id === updatedReview.id ? updatedReview : review)
    );
  };

  // "더보기" 기능: 5개씩 추가 노출
  const loadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>영화 리뷰</h1>
      <ReviewForm onAddReview={handleAddReview} />
      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => setSortOrder('latest')}>최신순</button>
        <button onClick={() => setSortOrder('best')} style={{ marginLeft: '0.5rem' }}>베스트순</button>
      </div>
      <ReviewList 
        reviews={sortedReviews.slice(0, visibleCount)} 
        onDelete={handleDeleteReview}
        onEdit={handleEditReview}
      />
      {visibleCount < sortedReviews.length && (
        <button onClick={loadMore}>더보기</button>
      )}
    </div>
  );
}

export default App;
