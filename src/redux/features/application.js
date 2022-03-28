const initialState = {
  signingIn: false,
  signingUp: false,
  error: null,
  token: localStorage.getItem('token'),
  id: localStorage.getItem('id'),
};

export default function application(state = initialState, action) {
  switch (action.type) {
    // Регистрация на сайте
    case 'application/registration/pending':
      return {
        ...state,
        error: null,
        signingUp: true,
      };
    case 'application/registration/fulfilled':
      return {
        ...state,
        signingUp: false,
      };
    case 'application/registration/rejected':
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    // Авторизация на сайте
    case 'application/authorization/pending':
      return {
        ...state,
        signingIn: true,
        error: null,
      };
    case 'application/authorization/fulfilled':
      return {
        ...state,
        signingIn: false,
        token: action.payload.token,
        id: action.payload.id,
      };
    // Выход из аккаунта
    case 'application/logout/fulfilled':
      return {
        ...state,
        token: null,
        id: null,
      };
    default:
      return state;
  }
}

export const registration = (login, password, phone) => {
  return async (dispatch) => {
    dispatch({ type: 'application/registration/pending' });
    try {
      const responce = await fetch('http://localhost:3030/registration', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ login, password, phone }),
      });
      const json = await responce.json();
      dispatch({ type: 'application/registration/fulfilled', payload: json });
    } catch (e) {
      dispatch({
        type: 'application/registration/rejected',
        error: e.toString(),
      });
    }
  };
};

export const authorization = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: 'application/auhtorization/pending' });
    try {
      const responce = await fetch('http://localhost:3030/authorization', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await responce.json();
      console.log(json);
      dispatch({ type: 'application/authorization/fulfilled', payload: json });
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
    } catch (e) {
      dispatch({ type: 'application/auhtorization/rejected' });
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: 'application/logout/fulfilled' });
    localStorage.clear();
  };
};
