import React from "react";
import { connect } from "react-redux";

import { loadCategories, setSelectedCategory } from "../store/categories";

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.categoryItemUi = this.categoryItemUi.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();


  }

  categoryItemUi(category) {
    const isSelected = category.id === this.props.selectedCategoryId;
    return (
      <div
        key={category.id}
        className={`category-item ${isSelected ? "is-selected" : ""}`}
        onClick={() => this.props.setCategory(category.id)}
      >
        {category.name}
      </div>
    );
  }

  render() {
    const { categories, isLoading } = this.props;
    return (
      <div className="categories">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          categories.map(this.categoryItemUi)
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.list,
    isLoading: state.categories.isLoading,
    selectedCategoryId: state.categories.selectedCategoryId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(loadCategories()),
    setCategory: id => dispatch(setSelectedCategory(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
