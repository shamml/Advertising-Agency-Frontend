const initialState = {
  loading: false,
  billboards: [],
  cart: [],
  error: null,
};

export default function bilboard(state = initialState, action) {
  switch (action.type) {
    case 'getBillboard/fetch/pending':
      return {
        ...state,
        loading: true,
      };
    case 'getBillboard/fetch/fulfilled':
      return {
        ...state,
        loading: false,
        billboards: action.payload,
      };
    case 'getBillboard/fetch/rejected':
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
    dispatch({ type: 'getBillboard/fetch/pending' });
    try {
      const res = await fetch('http://localhost:3030/billboards');
      const json = await res.json();
      if (json.error) {
        dispatch({
          type: 'getBillboard/fetch/rejected',
          error: 'Ошибка при запросе',
        });
      } else {
        dispatch({ type: 'getBillboard/fetch/fulfilled', payload: json });
      }
    } catch (e) {
      dispatch({ type: 'getBillboard/fetch/rejected', error: e.toString() });
    }
  };
};