function StarRating( {rating, setRating}) { // rating과 setRating을 props로 전달받음
  return (
    <div>
      {[...Array(5)].map( // map 함수를 사용하여 5개의 별을 생성
        // map 함수의 콜백함수의 인자로 배열의 요소값과 인덱스값을 전달
        (_, index) => ( // 배열의 요소값은 사용하지 않으므로 _로 대체하고 배열의 인덱스 값 사용,
          <span 
          key={index}
          style={{cursor:'pointer', fontSize:'1.5rem', 
            color: index < rating ? 'gold' :'gray'}} // 별의 색상을 rating 값에 따라 gold 또는 gray로 설정
            onClick= {() => setRating (index + 1)} // 별을 클릭하면 setRating 함수를 호출하여 rating 값을 변경
          >
            ★
          </span> 
        )
      )}
    </div>
  );
}
export default StarRating;
