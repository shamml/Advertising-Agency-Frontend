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
      };
    case 'reviews/addreview/rejected':
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
      const responce = await fetch('http://localhost:3030/reviews', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${state.application.token}`,
        },
        body: JSON.stringify({ text, yes, no }),
      });
      const json = await responce.json();
      dispatch({ type: 'reviews/addreview/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'reviews/addreview/rejected', error: e.toString() });
    }
  };
};
