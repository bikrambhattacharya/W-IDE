const INITIAL_STATE = {
  Result: "",
  Compiler:""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CODE_EVALUATION_SUCCESS':
    return {
      Result: action.payload.stdout,
      Compiler:action.payload.compile_output
    };
  default:
    return state;
  }
};
