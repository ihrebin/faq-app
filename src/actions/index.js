import store from "../store";

export const loadDataStart = id => ({
  type: "LOAD_DATA_START",
  id
});

export const back = () => ({
  type: "BACK"
});

export const loadDataSuccess = data => ({
  type: "LOAD_DATA_SUCCESS",
  data
});

export const saveEntry = id => ({
  type: "SAVE_ENTRY",
  id
});

export const selectCategory = id => dispatch => {
  dispatch(loadDataStart(id));
  return load(id)
    .then((json) => {
      dispatch(loadDataSuccess(json))
    })
    .then(() => dispatch(saveEntry(id)));

};

const load = id =>
  fetch(
    "https://osfglobalservices12-alliance-prtnr-na01-dw.demandware.net/on/demandware.store/Sites-ipikh-Site/default/Faq-Get?id=" +
    id
  ).then(response => {
    return response.json();
  });

const loadCategory = id => dispatch => {
  dispatch(loadDataStart(id));
  return load(id)
    .then((json) => {
      dispatch(loadDataSuccess(json))
    });
};

export const stepBack = () => dispatch => {
  const state = store.getState();
  console.log("state");
  console.log(state);
  var lastEntry = state.history[state.history.length - 2];
  dispatch(loadCategory(lastEntry));
  dispatch(back());
};