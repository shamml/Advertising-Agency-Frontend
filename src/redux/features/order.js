const initialState = {
  loading: false,
  orders: {
    rents: [],
    sales: [],
  },
  error: null,
};

export default function order(state = initialState, action) {
  switch (action.type) {
    case 'order/fetchOrders/rejected':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'order/fetchOrders/fulfilled':
      return {
        ...state,
        loading: false,
        orders: {
          ...state.orders,
          rents: [...state.orders.rents, action.payload.buy.rents],
          sales: [...state.orders.sales, action.payload.buy.sales],
        },
      };
    case 'order/fetchOrders/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'order/fetchOrders/pending' });
    try {
      const responce = await fetch('http://localhost:3030/purchased/user', {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      const json = await responce.json();
      dispatch({ type: 'order/fetchOrders/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'order/fetchOrders/rejected', error: e.toString() });
    }
  };
};
