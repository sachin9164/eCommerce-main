const ADD_ITEM = "cart/ADD_ITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";
const TOGGLE_CART = "cart/TOGGLE_CART";
const UPDATE_TOTAL = "cart/UPDATE_TOTAL";


function getCartTotal(state) {
  const items = state.items;
  let total = 0;
  Object.keys(items).forEach(itemId => {
    const item = items[itemId];
    total += item.quantity * item.price;
  });
  return total;
}


export function addItem(item) {
  return dispatch => {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });

    dispatch({ type: UPDATE_TOTAL });
  };
}

export function removeItem(item) {
  return dispatch => {
    dispatch({
      type: REMOVE_ITEM,
      payload: item
    });

    dispatch({ type: UPDATE_TOTAL });
  };
}

export function toggleCart() {
  return { type: TOGGLE_CART };
}

export default function cart(
  state = { items: {}, isOpen: false, total: 0 },
  action
) {
  switch (action.type) {
    case ADD_ITEM: {
      const { id, ...data } = action.payload;
      let item = state.items[id];
      if (item) {
        item.quantity += 1;
      } else {
        item = {
          ...data,
          quantity: 1
        };
      }

      return {
        ...state,
        items: {
          ...state.items,
          [id]: { ...item }
        }
      };
    }
    case REMOVE_ITEM: {
      const { id } = action.payload;
      const newItems = { ...state.items };
      if (newItems[id].quantity === 1) {
        delete newItems[id];
      } else {
        newItems[id].quantity -= 1;
        newItems[id] = { ...newItems[id] };
      }
      return { ...state, items: newItems };
    }
    case UPDATE_TOTAL:
      return { ...state, total: getCartTotal(state) };
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };
   
    default:
      return state;
  }
}
