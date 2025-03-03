import PropTypes from 'prop-types';

function StarRating({ rating, setRating }) {
  const maxStars = 5;
  return (
    <div>
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span 
            key={index}
            style={{ cursor: 'pointer', fontSize: '1.5rem', color: starValue <= rating ? 'gold' : 'gray' }}
            onClick={setRating ? () => setRating(starValue) : undefined} // ❗ setRating이 undefined일 경우 오류 방지
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func, // 🔥 필수(propTypes에서 isRequired 제거)
};

export default StarRating;
