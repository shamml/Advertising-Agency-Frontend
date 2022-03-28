const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

export default function reviews(state = initialState, action) {
  switch (action.type) {
    // Добавление отзыва
    case 'reviews/addreview/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'reviews/addreview/fulfilled':
      return {
        ...state,
        loading: false,
        reviews: [action.payload, ...state.reviews]
      };
    case 'reviews/addreview/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // Вывод отзывов
    case 'reviews/getreview/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'reviews/getreview/fulfilled':
      return {
        ...state,
        loading: false,
        reviews: action.payload
      };
    case 'reviews/getreview/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const addReview = (text, yes, no) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'reviews/addreview/pending' });
    try {
      const res = await fetch('http://localhost:3030/reviews', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${state.application.token}`,
        },
        body: JSON.stringify({ text, yes, no }),
      });
      const json = await res.json();
      console.log(json)
      dispatch({ type: 'reviews/addreview/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'reviews/addreview/rejected', error: e.toString() });
    }
  };
};
export const getAllReview = () => {
  return async (dispatch) => {
    dispatch({ type: 'reviews/getreview/pending' });
    try {
      const res = await fetch('http://localhost:3030/reviews');
      const json = await res.json();
      console.log(json)
      dispatch({ type: 'reviews/getreview/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'reviews/getreview/rejected', error: e.toString() });
    }
  };
};
