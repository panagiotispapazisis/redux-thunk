import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
import config from "./config";

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();

export default app;
