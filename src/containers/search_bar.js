import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmitForm(event) {
    event.preventDefault();
    this.props.fetchUser(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          placeholder="Add Players"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span>
          <button type="submit">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);