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

// для дальнейшей работы на стороне админа

// export const patchSideABillboard = (id, sideA) => {
//   return async (dispatch, getState) => {
//     const state = getState();
//     dispatch({ type: 'patch/billboard/pending' });
//     try {
//       const responce = await fetch(
//         `http://localhost:3030/billboard/sidea/${id}`,
//         {
//           method: 'PATCH',
//           headers: {
//             Authorization: `Bearer ${state.application.token}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ sideA }),
//         },
//       );
//       const json = await responce.json();
//       dispatch({ type: 'patch/billboard/fulfilled', payload: json });
//     } catch (e) {
//       dispatch({ type: 'patch/billboard/rejected', error: e.toString() });
//     }
//   };
// };
//
// export const patchSideBBillboard = (id, sideB) => {
//   console.log(id, sideB);
//   return async (dispatch, getState) => {
//     const state = getState();
//     dispatch({ type: 'patch/billboard/pending' });
//     try {
//       const responce = await fetch(
//         `http://localhost:3030/billboard/sideb/${id}`,
//         {
//           method: 'PATCH',
//           headers: {
//             Authorization: `Bearer ${state.application.token}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ sideB }),
//         },
//       );
//       const json = await responce.json();
//       console.log(json);
//       dispatch({ type: 'patch/billboard/fulfilled', payload: json });
//     } catch (e) {
//       dispatch({ type: 'patch/billboard/rejected', error: e.toString() });
//     }
//   };
// };
