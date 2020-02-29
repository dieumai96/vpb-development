import React, { Component, useState } from 'react';
import './Menu.scss';
const Menu = () => {
  const [indexPage, setIndexPage] = useState(['componentshowcase', 'homepage', 'typography', 'iWantTo', 'error', 'pdfView']);
  const [card, setCard] = useState(['CardService', 'CardDetail', 'CarCompare']);
  const [allForm, setAllForm] = useState(['registerPersonal', 'registerHousehold', 'registerSME', 'guaranteeForm', 'ticketStatus', 'contractDeposit', 'supportForm']);
  const [sprint2, setSprint2] = useState(['wishlistpage', 'branchatm', 'interestRate', 'promotionDetail', 'exchangeRate', 'searchPage', 'searchresultpage', 'promotionHub']);
  const [sprint3, setSprint3] = useState(['supportNowFAQ', 'library', 'storyTipsDetail', 'storyTipsListing', 'termsConditionDetail', 'AboutVPBank', 'generaIntroduction', 'News', 'eventVPBank', 'vpbSystem', 'investorRelations',
    'shareholderMeeting', 'annualReport', 'carDisclosures', 'otherDisclosures', 'aboutAward', 'investorPresentations', 'finacialReports', 'corporateGevernance', 'investBonds', 'leaderShip', 'landmarkMemory', 'pressReleases', 'biddingNewsPage', 'talkedAboutVPbankPage', 'vpbankNewPage', 'actionCSR', 'formDocuments'
  ]);
  return (
    <div className="container menu-item">
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># Index page</h4>
          <ul className="menu">
            {indexPage.map((item, index) => {
              return (
                <li className="child-item" key={index}><span>{item}</span></li>
              )
            })}
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># Card</h4>
          <ul className="menu">
            {card.map((item, index) => {
              return (
                <li className="child-item" key={index}><span>{item}</span></li>
              )
            })}
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># All Form</h4>
          <ul className="menu">
            {allForm.map((item, index) => {
              return (
                <li className="child-item" key={index}><span>{item}</span></li>
              )
            })}
          </ul>
        </div>
        <div className="col-md-4 col-lg-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># Sprint 2</h4>
          <ul className="menu">
            {sprint2.map((item, index) => {
              return (
                <li className="child-item" key={index}><span>{item}</span></li>
              )
            })}
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <h4 className="title"># Sprint 3</h4>
          <ul className="menu">
            {sprint3.map((item, index) => {
              return (
                <li className="child-item" key={index}><span>{item}</span></li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Menu;
