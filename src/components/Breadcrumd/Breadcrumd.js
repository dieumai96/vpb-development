import React, { Component } from 'react'
import './../../assets/styles/variables.scss';
import './Breadcrumd.scss';

export default class Breadcrumd extends Component {
  render() {
    return (
      <ol class="breadcrumb animated-slow delay-0" animation-type="fadeInUp">
        <li class="breadcrumb__item"><a href="#">Retail</a></li>
        <li class="breadcrumb__item"><a href="#">Card Services</a></li>
        <li class="breadcrumb__item"><a href="#">Mobifone VPBank Titanium Card</a></li>
      </ol>
    )
  }
}
