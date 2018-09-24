import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to={'/'}>
          <img src="./img/logo.png"></img>
        </Link>
      </header>
    )
  }
}
