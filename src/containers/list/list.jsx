import React , { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {
  render() {
    return (
      <div>
        <Link to="/detail">to detail</Link>
      </div>
    )
  }
}
