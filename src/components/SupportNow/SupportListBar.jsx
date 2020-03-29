import React, { Component } from 'react'

export default class SupportListBar extends Component {
  render() {
    return (
      <div className="support-list-bar-content support--menu-collapse smooth-scroll-list">
        <div className="desktop">
          <ul className="desktop__list">
            <li><a href="#support-FAQs-content"><span>Câu hỏi thường gặp</span></a></li>
            <li><a href="#support-research-content"><span>Tra cứu</span></a></li>
            <li><a href="#support-form-register-content"><span>Đăng ký nhận hỗ trợ</span></a></li>
            <li><a href="#support-send-email-form"><span>Gửi Email</span></a></li>
          </ul>
        </div>
        <div className="mobile">
          <div className="category"><img src="/images/icons/category.png" alt="" /><span>Danh mục</span></div>
          <ul className="mobile__list">
            <li><a href="#support-FAQs-content">Câu hỏi thường gặp</a></li>
            <li><a href="#support-research-content">Tra cứu</a></li>
            <li><a href="#support-form-register-content">Đăng ký nhận hỗ trợ</a></li>
            <li><a href="#support-send-email-form">Gửi Email</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
