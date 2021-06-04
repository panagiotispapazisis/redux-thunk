import { db } from "../../firebase/index";

export const readDocs = () => async (dispatch) => {
  const response = await db
    .collection("todos")
    .add({ name: "kostas" })
    .then((doc) => {
      return doc.id;
    });

  dispatch({
    type: "READ_DATA",
    payload: response,
  });
};
