import React, { useState, useMemo, Fragment } from 'react';

const ServerPaging = () => {
  const totalPage = 10;

  const [displayPage, setDisplayPage] = useState([1, 2, 3, 4]);

  const getMaxDisplayPage = useMemo(() => displayPage[displayPage.length - 1], [displayPage]);

  const getMinDisplayPage = useMemo(() => displayPage[0], [displayPage]);

  const loadOldPage = () => {

  }

  const loadNewPage = () => {
    if(totalPage > getMaxDisplayPage){
      
    }
  }

  return (
    <div className="paginator js-paginator">
      {totalPage <= 4 ? (
        <ul className="jsPagination pagination paginatorCustomClass">
          <li className="page-item jspreviousPage">
            <a href="#" className="page-link jsNavPage disabled">
              <i className="ico icon-arrow-prev"></i>
            </a>
          </li>
          {Array.from(Array(totalPage), (e, i) => (
            <li className="page-item" key={i}>
              <span className="page-link jsPage">{i + 1}</span>
            </li>
          ))}
          <li className="page-item jsNextPage">
            <a href="#" className="page-link jsNavPage">
              <i className="ico icon-arrow-next"></i>
            </a>
          </li>
        </ul>
      ) :
        <ul className="jsPagination pagination paginatorCustomClass">
          <li className="page-item jspreviousPage">
            <a href="#" className="page-link jsNavPage disabled">
              <i className="ico icon-arrow-prev"></i>
            </a>
          </li>
          <li className="page-item" onClick={() => loadOldPage()}>
            <span className="page-link">
              ...
          </span>
          </li>
          {displayPage.map((pageIndex, index) => (
            <li className="page-item" key={index}>
              <span className="page-link jsPage">{pageIndex}</span>
            </li>
          ))}

          <li className="page-item" onClick={() => loadNewPage()}>
            <span className="page-link">
              ...
          </span>
          </li>
          <li className="page-item jsNextPage">
            <a href="#" className="page-link jsNavPage">
              <i className="ico icon-arrow-next"></i>
            </a>
          </li>
        </ul>
      }
    </div>
  )
}

export default ServerPaging;
