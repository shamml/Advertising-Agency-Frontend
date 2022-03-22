const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function stformat(state= initialState, action) {
  switch (action.type) {
    case 'STFormat/fetch-STFormat/pending':
      return {
        ...state,
        loading: true,
      };
    case 'STFormat/fetch-STFormat/fulfilled':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case 'STFormat/fetch-STFormat/rejected':
      return {
        ...state,
        loading: false,
        items: [],
        error: action.error,
      };
    default:
      return state
  }
}

export const fetchSTFormat = () => {
  return async (dispatch) => {
    dispatch({ type: 'STFormat/fetch-STFormat/pending' });
    try {
      const res = await fetch('http://localhost:3030/stFormats');

      const json = await res.json();

      if (json.error) {
        dispatch({
          type: 'STFormat/fetch-STFormat/rejected',
          error: 'При запросе на сервер произошла ошибка',
        });
      } else {
        dispatch({ type: 'STFormat/fetch-STFormat/fulfilled', payload: json });
      }
    } catch (e) {
      dispatch({ type: 'STFormat/fetch-STFormat/rejected', error: e.toString() });
    }
  };
};