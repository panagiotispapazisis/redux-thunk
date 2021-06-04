import React from "react";
import { Button } from "@material-ui/core";
import { readDocs } from "./redux/actions/todoAction";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(readDocs())}>Press</Button>
    </div>
  );
}

export default App;
