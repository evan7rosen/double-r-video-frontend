import * as types from "./constants";

const initialState = {
  all: [],
  selectedUser: {},
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_USERS_PENDING:
    case types.ADD_USER_PENDING:
    case types.REMOVE_USER_PENDING:
    case types.EDIT_USER_PENDING:
    case types.SELECT_USER_PENDING:
      return state;

    case types.FETCH_ALL_USERS_FAILED:
    case types.ADD_USER_FAILED:
    case types.REMOVE_USER_FAILED:
    case types.EDIT_USER_FAILED:
    case types.SELECT_USER_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(user => user.id !== action.payload)
      };

    case types.EDIT_USER_SUCCESS:
      return {
        ...state,
        all: [
          action.payload,
          ...state.all.filter(user => user.id !== action.payload.id)
        ]
      };

    case types.SELECT_USER_SUCCESS:
      return {
        ...state,
        selectedUser: action.payload
      };

    default:
      return state;
  }
};
