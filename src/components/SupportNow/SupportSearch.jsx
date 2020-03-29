import React, { Component } from 'react'

export default class SupportSearch extends Component {
  render() {
    return (
      <div className="promotion-search-content" id="main-search-bar">
        <div className="promotion-search-content__field">
          <div className="autocomplete-support-now"><input id="mysearchbar" type="text" placeholder="Tìm ưu đãi…" />
            <div className="autocomplete-support-now-items" id="mysearchbarautocomplete-list"></div>
          </div>
          <div className="search-button"><i className="icon-search1"></i></div>
          <div className="close-button"><i className="icon-close"></i></div>
        </div>
        <div className="promotion-search-content__button" id="support-now-search"><a className="btn btn-primary" href="">Tìm kiếm</a></div>
      </div>
    )
  }
}
