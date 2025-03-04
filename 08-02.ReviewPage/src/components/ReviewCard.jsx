function formatDate(value) { // 날짜 포맷 함수
  const date = new Date(value); // value 값으로 Date 객체 생성
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`; // 년, 월, 일, 시, 분, 초 반환
}

function ReviewCard({ review, onDelete }) { // 리뷰 데이터와 리뷰 삭제 함수를 props로 전달받음
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
      <img src={review.imgUrl} alt="" style={{ width: 200, height: 300, objectFit: "cover", marginRight: 20 }} />
      <h2>{review.title}</h2>
      <p>{review.rating}</p>
      {/* formatDate 함수를 사용하여 날짜와 시간을 특정 형식으로 포맷 */}
      <p>{formatDate(review.createdAt)}</p>
      {/* toLocaleString()을 사용하여 브라우저 로케일에 맞게 날짜와 시간을 포맷 */}
      {/* <p>작성일: {new Date(review.createdAt).toLocaleString()}</p> */}
      <p>{review.content}</p>
      <button onClick={() => onDelete(review.id)}>삭제</button> {/* 리뷰 삭제 함수 호출 */}
    </div>
  );
}

export default ReviewCard;