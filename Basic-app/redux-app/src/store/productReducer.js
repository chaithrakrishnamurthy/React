import * as actions from './actions';
const initData = {
  products: [
    { pName: "Apple", price: 20 },
    { pName: "Grapes", price: 60 },
    { pName: "Oranges", price: 80 },
    { pName: "Banana", price: 30 },
    { pName: "Mango", price: 90 },
  ],
  cart: [],
  total: 0,
 
};
const productReducer = (state = initData, action) => {
  if (action.type === actions.PURCHASE) {
    return {
      ...state,
      // products:state.products,// what if multiple parameters are there in a huge data
      cart: [...state.cart, action.payLoad],
      total: state.total + parseInt(action.payLoad.price),
    };
  }
  if(action.type===actions.DELETE){
    return{
      ...state,
      cart: state.cart.filter((item,i)=>i!==action.payLoad.index),
      total: state.total-action.payLoad.price
    }
  }
  return state;
};
export default productReducer;
