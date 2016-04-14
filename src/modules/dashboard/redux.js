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
        isFetching: true
      };
    case RECEIVE:
      return {
        ...state,
        ...action.viewModel
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
      return fetchIt({
        url: 'getDashboard'
      }).then((viewModel) => {
        dispatch(receiveViewModel(viewModel));
      });
    };
  }
};
