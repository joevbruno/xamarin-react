import { fetchIt } from '../../utils';

// ---- ACTION TYPES ----
const namespace = 'mobile/dashbaord/';
const REQUEST = `${namespace}REQUEST`;
const RECEIVE = `${namespace}RECEIVE`;

// #region ---- REDUCER ----
const initialState = {
  canView: true,
  isFetching: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isFetching: true,
        madeItToRequest: true
      };
    case RECEIVE:
      return {
        ...state,
        ...action.viewModel,
        isFetching: false,
        madeItToReceive: true
      };
    default:
      return state;
  }
}


// Actions
const requestViewModel = () => {
  return {
    type: REQUEST
  };
};

const receiveViewModel = (viewModel) => {
  return {
    type: RECEIVE,
    viewModel
  };
};

export const actionCreators = {
  fetchViewModel: () => {
    return (dispatch) => {
      dispatch(requestViewModel());
      return fetchIt('TestNativeController').then((viewModel) => {
        dispatch(receiveViewModel(viewModel));
      }).catch((err) => console.log('error', err)); // eslint-disable-line no-console
    };
  },
};
