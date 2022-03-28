import React, { useEffect } from 'react'
import { getAllReview } from '../../../redux/features/reviews'
import { useDispatch, useSelector } from 'react-redux';
import styles  from "./styles.module.css";

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
          <div className={styles.reviewBlock}>
            <div>
              {review.recommendation.yes ? <h3>😊</h3> : ''}
              {review.recommendation.no ? <h3>🙁</h3> : ''}
            </div>
            <div>
              {review.text}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default ReviewCustomer