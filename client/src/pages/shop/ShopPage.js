import React, { lazy, Suspense, useEffect } from "react";
import { Route } from "react-router";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/Spinner";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/CollectionOverviewContainer")
);
const CollectionContainer = lazy(() =>
  import("../collection/CollectionContainer")
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  // collectionRef.onSnapshot(async (snapshot) => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   updateCollections(collectionsMap);
  //   this.setState({ loading: false });
  // });
  // with fetch api
  // fetch(
  //   "https://firestore.googleapis.com/v1/projects/clothing-story-db/databases/(default)/documents/collections"
  // )
  //   .then((res) => res.json())
  //   .then((collections) => console.log(collections));

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          path={`${match.path}`}
          exact
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
