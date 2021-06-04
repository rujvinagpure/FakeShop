// reducer takes initial state and action
import {ActionTypes} from '../constants/action-types';
// const initialState = {
//     products :[
//         {
//             id:1,
//             title:"RUJVI",
//             category: "programmer"
//         }
//     ],
// };

const intialState = {
  products: [],
};
// export const productsReducer = (state = intialState, { type, payload }) => {
//     switch (type) {
//       case ActionTypes.SET_PRODUCTS:
//         return { ...state, products: payload };
//       default:
//         return state;
//     }
//   };
export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
  