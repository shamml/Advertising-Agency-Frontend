const initialState = {
  rents: [],
  error: null,
  loading: false,
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
        rents: action.payload,
      };
    case 'cart/fetch-cart/rejected':
      return {
        ...state,
        loading: false,
        rents: [],
        error: action.error,
      };
    case 'STFormat/patch/pending':
      return {
        ...state,
        loadingProduct: true,
      };
    case 'STFormat/patch/fulfilled':
      return {
        ...state,
        loadingProduct: false,
        rents: [...state.items, action.payload],
      };
    case 'STFormat/patch/rejected':
      return {
        ...state,
        loadingProduct: false,
        rents: [],
        error: action.error,
      };
    case 'billboard/patch/pending':
      return {
        ...state,
        loading: true,
      };
    case 'billboard/patch/fulfilled':
      return {
        ...state,
        loading: false,
        rents: [...state.rent, action.payload],
      };
    case 'billboard/patch/rejected':
      return {
        ...state,
        loading: false,
        rents: [],
        error: action.error,
      };
    default:
      return state;
  }
}

export const fetchRents = (id) => {
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

export const addSTFormatToCart = (id, STFormat) => {
  console.log(STFormat);
  return async (dispatch) => {
    dispatch({ type: 'STFormat/patch/pending' });
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
          type: 'STFormat/patch/rejected',
          error: 'При запросе на сервер произошла ошибка',
        });
      } else {
        dispatch({ type: 'STFormat/patch/fulfilled', payload: json });
      }
    } catch (e) {
      console.log('ошибка');
      dispatch({ type: 'STFormat/patch/rejected', error: e.toString() });
    }
  };
};
export const addBillboardToCart = (id, billboard) => {
  console.log(billboard);
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'billboard/patch/pending' });
    try {
      const res = await fetch(`http://localhost:3030/cart/product/${id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product: billboard }),
      });
      const json = await res.json();

      console.log(json.product.rents);

      if (json.error) {
        dispatch({
          type: 'billboard/patch/rejected',
          error: 'Ошибка при запросе',
        });
      } else {
        dispatch({ type: 'billboard/patch/fulfilled', payload: json });
      }
    } catch (e) {
      dispatch({
        type: 'billboard/patch/rejected',
        error: e.toString(),
      });
    }
  };
};
