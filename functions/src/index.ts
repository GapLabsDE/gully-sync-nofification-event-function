import * as functions from "firebase-functions";

// uses {wildcard} in place of the document ID: https://firebase.google.com/docs/functions/firestore-events#wildcards-parameters
export const interceptOnDeleteEventData = functions.firestore
  .document("gullys/{gullyId}")
  .onDelete((snap) => {
    const deletedData = snap.data();
    console.log("deleted Data: ", deletedData);
  });
