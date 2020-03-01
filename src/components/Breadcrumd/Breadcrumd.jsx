import React, { Component } from 'react'

export default class Breadcrumd extends Component {
  render() {
    return (
      <ol className="breadcrumb animated-slow delay-0" animation-type="fadeInUp">
        <li className="breadcrumb__item"><a href="#">Retail</a></li>
        <li className="breadcrumb__item"><a href="#">Card Services</a></li>
        <li className="breadcrumb__item"><a href="#">Mobifone VPBank Titanium Card</a></li>
      </ol>
    )
  }
}
