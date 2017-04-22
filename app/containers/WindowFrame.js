import React, { Component, PropTypes } from 'react';

export default class WindowFrame extends Component {
  /*
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };
  //* /

  handleLogin() {
    const { onLogin } = this.props;
    const username = this.refs.username.value;

    onLogin({ username, loggedIn: true });

    this.props.router.push('/loggedin');
  }
  //*/
  static propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filterValue: PropTypes.string
  };

  handleFilter() {
      this.props.handleFilter();
  }

  render() {
    
    return (
      <div id="window-frame">
        <div className="top">
            <input name='filter' value={this.props.filterValue} />
            <i className="material-icons">search</i>
        </div>
        <div className="container">
            {this.props.children}
        </div>
      </div>

    );
  }
}
