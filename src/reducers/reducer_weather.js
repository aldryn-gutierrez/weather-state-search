import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.payload.data === undefined) {
        return state;
      }
      
      return [ action.payload.data, ...state ];
      // return [ action.payload.data ];
      break;
  }
  return state;
}
