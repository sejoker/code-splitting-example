import React from 'react';
import contentTypes from './factory';

export default class EntryFactory extends React.Component {
  render() {
    const { module } = this.props;
    if (!module) {
      return null;
    }

    const knownContentType = contentTypes[module.content_type];
    const ContentType = knownContentType
      ? contentTypes[module.content_type]()
      : contentTypes.default();

    const items = module.items ? this.renderItems(module.items) : null;

    return renderContentType(ContentType, module, items);
  }

  renderItems(items) {
    return items.map((item, index) => {
      return <EntryFactory module={item} key={index} />;
    });
  }
}

function renderContentType(ContentType, module, items) {
  return (
    <div>
      <ContentType items={module.items} {...module.content}>
        {items}
      </ContentType>
    </div>
  );
}

EntryFactory.propTypes = {
  module: React.PropTypes.shape({
    content_type: React.PropTypes.string.isRequired,
    content: React.PropTypes.object
  })
};

