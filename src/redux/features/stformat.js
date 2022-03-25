const initialState = {
  items: [],
  loading: false,
  loadingCheck: false,
  error: null,
};

export default function stformat(state = initialState, action) {
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
    case 'check/patch/pending':
      return {
        ...state,
        loadingCheck: true,
      };
    case 'check/patch/fulfilled':
      return {
        ...state,
        loadingCheck: false,
        items: state.items.map((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              sideB: !item.sideB,
            };
          }
          return item;
        }),
      };
    case 'check/patch/rejected':
      return {
        ...state,
        loadingCheck: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getAllSTFormat = () => {
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
      dispatch({
        type: 'STFormat/fetch-STFormat/rejected',
        error: e.toString(),
      });
    }
  };
};
// export const editCheckboxSideB = (id, sideB) => {
//   console.log(sideB)
//   return async (dispatch) => {
//     dispatch({ type: 'check/patch/pending' });
//     try {
//       const res = await fetch(`http://localhost:3030/stFormat/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify({ sideB: !sideB }),
//       });
//       const json = await res.json();
//
//       console.log(json);
//
//       if (json.error) {
//         dispatch({
//           type: 'check/patch/rejected',
//           error: 'При запросе на сервер произошла ошибка',
//         });
//       } else {
//         dispatch({ type: 'check/patch/fulfilled', payload: json });
//       }
//     } catch (e) {
//       dispatch({
//         type: 'check/patch/rejected',
//         error: e.toString(),
//       });
//     }
//   };
// };
