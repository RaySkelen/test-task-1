const CREATE_DATA = "CREATE_DATA";
const ADD_NAME = "ADD_NAME";

let initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DATA: {
      return { ...action.state };
    }
    case ADD_NAME: {
      return { state, name: action.name };
    }
    default: {
      return state;
    }
  }
};

export const putData = (state) => ({ type: CREATE_DATA, state });
export const addName = (state) => ({ type: ADD_NAME, state });

export default dataReducer;