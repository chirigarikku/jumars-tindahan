import React from 'react';
import CartActions from '../../actions/CartActions';

export default React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <button type="button" onClick={this._handleClick} className="remove-btn">
        <i className="glyphicon glyphicon-trash" />
      </button>
    )
  },

  _handleClick(evt) {
    evt.preventDefault();
    CartActions.remove(this.props.id);
  }
})
