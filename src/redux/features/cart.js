const initialState = {
  error: null,
  loading: false,
  items: [],
  loadingProduct: true,
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'cart/fetch-cart/pending':
      return {
        ...state,
        loading: true,
      };
    case 'cart/fetch-cart/fulfilled':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case 'cart/fetch-cart/rejected':
      return {
        ...state,
        loading: false,
        items: [],
        error: action.error,
      };
    case 'cart/patch/pending':
      return {
        ...state,
        loadingProduct: true,
      };
    case 'cart/patch/fulfilled':
      return {
        ...state,
        loadingProduct: false,
        items: [...state.items, action.payload],
      };
    case 'cart/patch/rejected':
      return {
        ...state,
        loadingProduct: false,
        items: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const fetchCart = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'cart/fetch-cart/pending' });
    try {
      const res = await fetch(`http://localhost:3030/cart/${id}`, {
        headers: {
          'Content-type': 'application/json',
        },
      });

      const json = await res.json();

      console.log(json);

      if (json.error) {
        dispatch({
          type: 'cart/fetch-cart/rejected',
          error: 'При запросе на сервер произошла ошибка',
        });
      } else {
        dispatch({ type: 'cart/fetch-cart/fulfilled', payload: json.product });
      }
    } catch (e) {
      dispatch({ type: 'cart/fetch-cart/rejected', error: e.toString() });
    }
  };
};

export const cartAddProduct = (id, STFormat) => {
  console.log(STFormat)
  return async (dispatch) => {
    dispatch({ type: 'cart/patch/pending' });
    try {
      const res = await fetch(`http://localhost:3030/cart/product/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ product: STFormat }),
      });
      const json = await res.json();

      console.log(json);

      if (json.error) {
      dispatch({
          type: 'cart/patch/rejected',
          error: 'При запросе на сервер произошла ошибка',
        });
      } else {
        dispatch({ type: 'cart/patch/fulfilled', payload: json });
      }
    } catch (e) {
      console.log('ошибка');
      dispatch({ type: 'cart/patch/rejected', error: e.toString() });
    }
  };
};
