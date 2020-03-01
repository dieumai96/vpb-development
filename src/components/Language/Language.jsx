import React, { useEffect } from 'react'
import LanguageJquery from './Language.jquery';
const Language = () => {
  useEffect(() => {
    LanguageJquery.init();
  })
  return (
    <div class="language">
      <ul class="button-select-language">
        <li><img src="/images/icons/icon-flag-vn.svg" alt="" /></li>
      </ul>
      <div class="language__select">
        <ul class="dropdown-language" id="active">
          <li class="selected" data-name="vn"><img src="/images/icons/icon-flag-vn.svg" alt="" /></li>
          <li data-name="en"><img src="/images/icons/icon-flag-en.svg" alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Language;