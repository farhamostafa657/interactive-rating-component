import { useReducer } from "react";
import "./App.css";
import Ratting from "./Ratting";
import ThankYou from "./ThankYou";

const initialState = {
  index: null,
  status: "set-ratting",
};

function reducer(state, action) {
  switch (action.type) {
    case "rating":
      return { ...state, index: action.payload };
    case "submet":
      return { ...state, status: "submet-ratting" };
    default:
      return state;
  }
}

function App() {
  const [{ index, status }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {status == "set-ratting" && <Ratting index={index} dispatch={dispatch} />}
      ;{status == "submet-ratting" && <ThankYou index={index} />}
    </>
  );
}

export default App;
