function formatDate(value) { // 날짜 포맷 함수
  const date = new Date(value); // value 값으로 Date 객체 생성
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`; // 년, 월, 일 반환
}

function ReviewCard({review}) {
  return(
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
      <img src={review.imgUrl} alt="" style={{width:200, heigth:300, objectFit:"cover", marginRight:20}}/>
      <h2>{review.title}</h2>
      <p>{review.rating}</p>
      <p>{formatDate(review.createdAt)}</p>
      <p>{review.content}</p>  
    </div>
  )
}
export default ReviewCard;