import { PROMO_CODE } from '../actions/types';


const initialState = {
  open: false,
  value: ''
}

export default function(state = initialState, action) {
  switch(action.type){
    case PROMO_CODE:
    console.log('reducer');
    return {
      ...state,
      value: action.payload
    }
    default:
      return state;
  }
}
