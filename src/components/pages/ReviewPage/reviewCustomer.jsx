import React, { useEffect } from 'react'
import { getAllReview } from '../../../redux/features/reviews'
import { useDispatch, useSelector } from 'react-redux'

const ReviewCustomer = () => {
  const dispatch = useDispatch();

  const review = useSelector((state) => state.reviews.reviews);

  useEffect(() => {
    dispatch(getAllReview());
  }, [dispatch]);

  return (
    <div>
      {review.map((review) => {
        return (
          <div>
            <div>
              {review._id}
            </div>
            <div>
              {review.text}
            </div>
            <div>
              {review.recommendation.yes ? <h3>Рекомендую</h3> : ''}
              {review.recommendation.no ? <h3>Не рекомендую</h3> : ''}
            </div>

          </div>
        );
      })}
    </div>
  )
}

export default ReviewCustomer