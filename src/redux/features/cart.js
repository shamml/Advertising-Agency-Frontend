const initialState = {
  rent: [],
  error: null,
  loading: false,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'addCart/fetch/pending':
      return {
        ...state,
        loading: true,
      };
    case 'addCart/fetch/fulfilled':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case 'addCart/fetch/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const addToCart = (id, billboard) => {
    console.log(billboard);
  return async (dispatch) => {
    dispatch({ type: 'addCart/fetch/pending' });
    try {
      const res = await fetch(`http://localhost:3030/cart/product/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product: billboard }),
      });
      const json = await res.json();

      console.log(json);

      if (json.error) {
        dispatch({
          type: 'addCart/fetch/rejected',
          error: 'Ошибка при запросе',
        });
      } else {
        dispatch({ type: 'addCart/fetch/fulfilled', payload: json });
      }
    } catch (e) {
      dispatch({
        type: 'addCart/fetch/rejected',
        error: e.toString(),
      });
    }
  };
};
