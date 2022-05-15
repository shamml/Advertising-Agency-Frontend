const initialState = {
  claims: [],
  loading: false,
  error: null,
};

export const claims = (state = initialState, action) => {
  switch (action.type) {
    case 'fetch/claims/pending':
      return {
        ...state,
        loading: true,
      };
    case 'fetch/claims/fulfilled':
      return {
        ...state,
        loading: false,
        claims: [...state.claims, action.payload],
      };
    case 'fetch/claims/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const addClaims = (name, phone) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'fetch/claims/pending' });
    try {
      const res = await fetch('http://localhost:3030/claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.application.token}`,
        },
        body: JSON.stringify({ name, phone }),
      });
      const json = await res.json();
      dispatch({ type: 'fetch/claims/fulfilled', payload: json });
    } catch (e) {
      dispatch({ type: 'fetch/claims/rejected', error: e.toString() });
    }
  };
};
