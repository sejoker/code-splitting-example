import React, { Component } from 'react';
import Link from 'react-router/lib/Link';
import './link.css';

class LinkComponent extends Component {
  render() {
    let { spaLink, className, style, title, onClick } = this.props;
    return (<Link to={spaLink} className={className} style={style} onClick={onClick} title={title}>{title}</Link>);
  }
}

LinkComponent.propTypes = {
  spaLink: React.PropTypes.string,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  title: React.PropTypes.string,
  children: React.PropTypes.any,
};

export default LinkComponent;
