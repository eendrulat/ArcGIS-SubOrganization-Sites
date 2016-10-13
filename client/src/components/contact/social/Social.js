import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  _generateList() {
    return Object.keys(this.props.accounts).map((account, i) => {
      if(this.props.accounts[account]) {
        return(
          <li key={i}>
          <a href={this.props.accounts[account]} target='_blank'>
          <i className={`fa fa-${account}`}></i>
          </a>
          </li>
        )
      }
      return false;
    });
  }

  render() {
    return(
      <ul className='social-list'>
      {this._generateList()}
      </ul>
    );
  }
}

export default Social;
