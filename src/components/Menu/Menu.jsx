import React, { useState } from 'react';
import { allForm as af, card as crd, indexPage as ixp, sprint2 as sp2, sprint3 as sp3 } from './Menu.data';
import './Menu.scss';
import { Link } from 'react-router-dom';
const Menu = () => {
  const [indexPage, setIndexPage] = useState(ixp);
  const [card, setCard] = useState(crd);
  const [allForm, setAllForm] = useState(af);
  const [sprint2, setSprint2] = useState(sp2);
  const [sprint3, setSprint3] = useState(sp3);
  return (
    <div className="container menu-item">
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># Index page</h4>
          <ul className="menu">
            {indexPage.map((item, index) => {
              return (
                <li className="child-item" key={index}>
                  <Link to={`${item.route}`}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># Card</h4>
          <ul className="menu">
            {card.map((item, index) => {
              return (
                <li className="child-item" key={index}>
                  <Link to={`${item.route}`}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># All Form</h4>
          <ul className="menu">
            {allForm.map((item, index) => {
              return (
                <li className="child-item" key={index}>
                  <Link to={`${item.route}`}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># Sprint 2</h4>
          <ul className="menu">
            {sprint2.map((item, index) => {
              return (
                <li className="child-item" key={index}>
                  <Link to={`${item.route}`}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># Sprint 3</h4>
          <ul className="menu">
            {sprint3.map((item, index) => {
              return (
                <li className="child-item" key={index}>
                  <Link to={`${item.route}`}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Menu;
