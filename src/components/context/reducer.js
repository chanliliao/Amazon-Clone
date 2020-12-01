export const initialState = {
  basket: [],
  tempOrder: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'ADD_TO_TEMP':
      return {
        ...state,
        tempOrder: [...state.tempOrder, action.item],
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    case 'REMOVE_FROM_BASKET':
      const basketIndex = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (basketIndex >= 0) {
        newBasket.splice(basketIndex, 1);
      } else {
        console.warn(
          `Can not remove product (id: ${action.id}) as it is not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case 'REMOVE_FROM_TEMP':
      const tempIndex = state.tempOrder.findIndex(
        (tempItem) => tempItem.id === action.id
      );
      let newTemp = [...state.tempOrder];

      if (tempIndex >= 0) {
        newTemp.splice(tempIndex, 1);
      } else {
        console.warn(
          `Can not remove product (id: ${action.id}) as it is not in basket!`
        );
      }
      return {
        ...state,
        tempOrder: newTemp,
      };
    default:
      return state;
  }
};

export default reducer;
