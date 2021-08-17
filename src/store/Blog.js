import dummyApi from "../dummy";

export const GET_INIT = "items/GET_INIT";
export const GET_DONE = "items/GET_DONE";

export function getItems(categoryId) {
  return async dispatch => {
    dispatch({ type: GET_INIT });
    const items = await dummyApi.getItems(categoryId);
    dispatch({
      type: GET_DONE,
      payload: items
    });
  };
}

export default function items(state = { list: [], isLoading: false }, action) {
  switch (action.type) {
    case GET_INIT:
      return { ...state, isLoading: true };
    case GET_DONE:
      return { ...state, isLoading: false, list: action.payload };
    default:
      return state;
  }
}
