import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { selectMetadata } from 'src/selectors';


class Category extends Component {
  shouldComponentUpdate(nextProps) {
    const {
      collection = {},
      category = collection.category,
    } = this.props;
    const {
      category: nextCategory = nextProps.collection.category,
    } = nextProps;
    return category !== nextCategory;
  }

  render() {
    const { collection, categories, category: pureCategory } = this.props;
    const category = collection ? collection.category : pureCategory;
    return categories[category] || <FormattedMessage id="category.other" defaultMessage="Other" />;
  }
}

const mapStateToProps = state => ({
  categories: selectMetadata(state).categories,
});

export default connect(mapStateToProps)(Category);
