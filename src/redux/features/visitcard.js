const initialState = {
  loading: false,
  visitCards: [],
  error: null,
};

export default function visitCards(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const addVisitCard = (paper, count, delivery, price) => {
  return async (dispatch, ) => {
    dispatch({ type: "visit/add/pending"});

    const res = fetch("http://localhost:3030/visitcards", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ typePaper: paper, count: count, delivery: delivery, price: price }), 
    });

    const visitCard = res.json();
    console.log(visitCard);

    if (visitCard.error) {
      dispatch({ type: "visit/add/rejected", error: visitCard.error});
    } else {
      dispatch({ type: "visit/add/fulfilled", payload: visitCard});
    }
  }
}
