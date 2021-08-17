import dummyApi from "../dummy";

export const GET_INIT = "categories/GET_INIT";
export const GET_DONE = "categories/GET_DONE";
export const SET_SELECTED = "categories/SET_SELECTED";

export function loadCategories() {
  return async dispatch => {
    dispatch({ type: GET_INIT });
    const categories = await dummyApi.getCategories();
    dispatch({ type: GET_DONE, payload: categories });
  };
}

export function setSelectedCategory(id) {
  return {
    type: SET_SELECTED,
    payload: id
  };
}

export default function categories(
  state = { list: [], isLoading: false, selectedCategoryId: "" },
  action
) {
  switch (action.type) {
    case GET_INIT:
      return { ...state, isLoading: true };
    case GET_DONE:
      return { ...state, list: action.payload, isLoading: false };
    case SET_SELECTED:
      return { ...state, selectedCategoryId: action.payload };
    default:
      return state;
  }
}
