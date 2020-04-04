import React, { useState, useMemo, Fragment } from 'react';

const ServerPaging = () => {
  const totalPage = 5;

  const [displayPage, setDisplayPage] = useState([1, 2, 3, 4]);

  const [pageIndex, setPageIndex] = useState(1);

  const getMaxDisplayPage = useMemo(() => displayPage[displayPage.length - 1], [displayPage]);

  const getMinDisplayPage = useMemo(() => displayPage[0], [displayPage]);

  const loadOldPage = () => {
    let newPage = [];
    newPage.push(getMinDisplayPage - 4);
    newPage.push(getMinDisplayPage - 3);
    newPage.push(getMinDisplayPage - 2);
    newPage.push(getMinDisplayPage - 1);
    setDisplayPage(newPage);
  }

  const loadNewPage = () => {
    let newPage = [];
    if (getMaxDisplayPage + 1 <= totalPage) {
      newPage.push(getMaxDisplayPage + 1);
    }
    if (getMaxDisplayPage + 2 <= totalPage) {
      newPage.push(getMaxDisplayPage + 2);
    }
    if (getMaxDisplayPage + 3 <= totalPage) {
      newPage.push(getMaxDisplayPage + 3);
    }
    if (getMaxDisplayPage + 4 <= totalPage) {
      newPage.push(getMaxDisplayPage + 4);
    }
    setDisplayPage(newPage);
  }

  const changePage = (page) => {
    setPageIndex(page);
  }

  return (
    <div className="paginator js-paginator">
      <ul className="jsPagination pagination paginatorCustomClass">
        <li className="page-item jspreviousPage">
          <a href="#" className="page-link jsNavPage disabled">
            <i className="ico icon-arrow-prev"></i>
          </a>
        </li>
        {getMinDisplayPage <= 1 ? null : (
          <li className="page-item" onClick={() => loadOldPage()}>
            <span className="page-link">
              ...
          </span>
          </li>
        )
        }
        {displayPage.map((page, index) => (
          <li className={pageIndex == page ? 'page-item selected' : 'page-item'} key={index} onClick={() => changePage(page)}>
            <span className="page-link jsPage">{page}</span>
          </li>
        ))}
        {
          getMaxDisplayPage >= totalPage ? null : (
            <li className="page-item" onClick={() => loadNewPage()}>
              <span className="page-link">
                ...
                </span>
            </li>
          )
        }
        <li className="page-item jsNextPage">
          <a href="#" className="page-link jsNavPage">
            <i className="ico icon-arrow-next"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ServerPaging;
