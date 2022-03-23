const initialState = {
  loading: false,
  billboards: [],
  cart: [],
  error: null,
};

export default function bilboard(state = initialState, action) {
  switch (action.type) {
    case 'get/fetch/pending':
      return {
        ...state,
        loading: true,
      };
    case 'get/fetch/fulfilled':
      return {
        ...state,
        loading: false,
        billboards: action.payload,
      };
    case 'get/fetch/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export const getAllBilboards = () => {
  return async (dispatch) => {
    dispatch({ type: 'get/fetch/pending' });
    try {
      const res = await fetch('http://localhost:3030/billboards');
      const json = await res.json();
      if (json.error) {
        dispatch({ type: 'get/fetch/rejected', error: 'Ошибка при запросе' });
      } else {
        dispatch({ type: 'get/fetch/fulfilled', payload: json });
      }
    } catch (e) {
      dispatch({ type: 'get/fetch/rejected', error: e.toString() });
    }
  };
};
