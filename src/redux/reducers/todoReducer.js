const initialState = {
  Todo: [],
};

export const todoReducer = (state = initialState, action) => {
  if (action.type === "READ_DATA") {
    return {
      Todo: [
        ...state.Todo,
        {
          TodoDoc: action.payload,
        },
      ],
    };
  } else {
    return state;
  }
};
