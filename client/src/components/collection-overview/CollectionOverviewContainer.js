import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionOverview from "./CollectionOverview";
import WithSpinner from "../with-spinner/WithSpinner";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
