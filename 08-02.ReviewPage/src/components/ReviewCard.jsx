import { useState } from 'react';

function formatDate(value) {
  // 날짜 포맷 함수
  const date = new Date(value); // value 값으로 Date 객체 생성
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`; // 년, 월, 일, 시, 분, 초 반환
}

function ReviewCard({ review, onDelete, onEdit }) {
  // 리뷰 데이터와 리뷰 삭제 함수, 리뷰 수정 함수를 props로 전달받음
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 관리
  const [editTitle, setEditTitle] = useState(review.title); // 수정할 리뷰 제목 상태 관리
  const [editContent, setEditContent] = useState(review.content); // 수정할 리뷰 내용 상태 관리

  // 수정 완료 시 실행될 함수
  const handleSave = () => {
    const updatedReview = {
      // 수정된 리뷰 데이터 객체 생성
      ...review, // 기존 리뷰 데이터
      title: editTitle, // 수정된 리뷰 제목
      content: editContent, // 수정된 리뷰 내용
    };
    onEdit(updatedReview); // 수정된 리뷰 데이터를 리뷰 수정 함수로 전달
    setIsEditing(false); // 수정 모드 종료
  };

  function renderStars(rating) {
    // 별점 렌더링 함수, rating 값에 따라 별 모양을 출력
    const maxStars = 5; // 최대 별점 개수
    return (
      <>
        {/* map 함수를 사용하여 maxStars만큼 반복 */}
        {[...Array(maxStars)].map((_, index) => (
          // 배열의 요소값은 사용하지 않으므로 _로 대체하고 배열의 인덱스 값 사용
          <span key={index} style={{ color: index < rating ? 'gold' : 'gray', fontSize: 18 }}>
            {/* 별의 색상을 rating 값에 따라 gold 또는 gray로 설정 */} ★
          </span>
        ))}
      </>
    );
  }

  return (
    <div className="review-card" style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
      {isEditing ? ( // 수정 모드일 때
        <>
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} /> {/* 리뷰 제목 입력 필드 */}
          <input value={editContent} onChange={(e) => setEditContent(e.target.value)} /> {/* 리뷰 내용 입력 필드 */}
          <button onClick={handleSave}>저장</button> {/* 저장 버튼 클릭 시 handleSave 함수 실행 */}
          <button onClick={() => setIsEditing(false)}>취소</button> {/* 취소 버튼 클릭 시 수정 모드 종료 */}
        </>
      ) : (
        // 수정 모드가 아닐 때
        <>
          <img src={review.imgUrl} alt="" style={{ width: 200, height: 300, objectFit: 'cover', marginRight: 20 }} />
          <div className="review-content">
            <h2>{review.title}</h2>
            <p>{renderStars(review.rating)}</p> {/*renderStars 함수를 사용하여 별점 출력 */}
            <p>{formatDate(review.createdAt)}</p> {/* formatDate 함수를 사용하여 날짜와 시간을 특정 형식으로 포맷 */}
            {/* toLocaleString()을 사용하여 브라우저 로케일에 맞게 날짜와 시간을 포맷 */}
            {/* <p>작성일: {new Date(review.createdAt).toLocaleString()}</p> */}
            <p>{review.content}</p>
            <div className="review-buttons">
              <button onClick={() => setIsEditing(true)}>수정</button> {/* 수정 버튼 클릭 시 수정 모드 활성화 */}
              <button onClick={() => onDelete(review.id)}>삭제</button> {/* 리뷰 삭제 함수 호출 */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ReviewCard;
