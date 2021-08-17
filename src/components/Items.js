import React from "react";
import { connect } from "react-redux";

import { getItems } from "../store/items";
import AddRemoveButton from "./AddRemoveButton";

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.itemUi = this.itemUi.bind(this);
  }

  componentDidMount() {
    const { getItems, selectedCategoryId } = this.props;
    getItems(selectedCategoryId);
  }

  addToCart(item) {
    alert(`${item.name} will be added to cart`);
  }

  itemUi(item) {
    return (
      <div className="product-item" key={item.id}>
        <img alt={item.name} src={item.poster} />
        <div className="product-detail">
          <div className="product-title">{item.name} </div>
          <div className="product-title">Vendor : {item.vendor} </div>
          <div className="product-purchase">
            <span>₹{item.price}</span>
            {
              //Check if message failed
              item.available > 0 ? (
                <div>
                  {" "}
                  Item available <br></br> <br></br>
                  <AddRemoveButton item={item} />
                </div>
              ) : (
                <div> No Stock </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, items } = this.props;
    if (isLoading) {
      return <div className="loader">Loading...</div>;
    }
    return <div className="products">{items.map(this.itemUi)}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items.list,
    isLoading: state.items.isLoading,
    selectedCategoryId: state.categories.selectedCategoryId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: (categoryId) => {
      dispatch(getItems(categoryId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
