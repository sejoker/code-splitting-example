import React, { PropTypes, Component } from 'react';
import EntryFactory from '../../EntryFactory';

class PageComponent extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {this.renderItems(items, 'body')}
      </div>
    );
  }

  renderItems(items, prefix) {
    return items.map((item, index) => {
      let customKey = `${prefix}-part-${index}`;

      return (
        <div data-c-type={item.content_type} key={customKey}>
          {this.renderItem(item)}
        </div>
      );
    });
  }

  renderItem(item) {
    return (
      <EntryFactory module={item} />
    );
  }
}

export default PageComponent;