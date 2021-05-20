import { all, call, put, takeLatest } from "redux-saga/effects";
import { FETCH_COLLECTIONS_START } from "./shopTypes";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebaseUtils";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     dispatch(FETCH_COLLECTIONS_SUCCESS(collectionsMap));
  //   })
  //   .catch((error) => dispatch(FETCH_COLLECTIONS_FAILURE(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
