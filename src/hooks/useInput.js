import { useCallback, useReducer} from "react";

const useInput = (initialForm) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          [action.name]: action.value,
        };
      case "RESET":
        return Object.keys(state).reduce((acc, current) => {
          acc[current] = "";
          return acc;
        }, {});
      default:
        return state;
    }
  };
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", name, value });
  }, []);
  const reset = useCallback(() => dispatch({ type: "RESET" }), []);
  return [form, onChange, reset];
};

export default useInput;
