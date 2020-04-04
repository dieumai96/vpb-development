import React, { useState, useMemo, useEffect, memo, useCallback } from 'react';

const ServerPaging = memo(({ totalPage, changePageIndex }) => {
  const [displayPage, setDisplayPage] = useState([]);

  useEffect(() => {
    let pages = [];
    if (totalPage < 4) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      pages = [1, 2, 3, 4];
    }
    setDisplayPage(pages);
  }, [totalPage])

  const [pageIndex, setPageIndex] = useState(1);

  const getMaxDisplayPage = useMemo(() => displayPage[displayPage.length - 1], [displayPage]);

  const getMinDisplayPage = useMemo(() => displayPage[0], [displayPage]);

  const changPage = useCallback((page) => {
    setPageIndex(page);
    changePageIndex(page);
  }, [pageIndex]);

  // INFO : action after change pageIndex, smaller equals minDisplay  or bigger than  maxDisplay
  useMemo(() => {
    let newPages = [];
    if (pageIndex == getMaxDisplayPage + 1) {
      if (pageIndex <= totalPage) {
        newPages.push(pageIndex);
      }
      if (pageIndex + 1 <= totalPage) {
        newPages.push(pageIndex + 1);
      }
      if (pageIndex + 2 <= totalPage) {
        newPages.push(pageIndex + 2);
      }
      if (pageIndex + 3 <= totalPage) {
        newPages.push(pageIndex + 3);
      }
      setDisplayPage(newPages);
    }
    if (pageIndex == getMinDisplayPage - 1) {
      newPages.push(pageIndex - 3);
      newPages.push(pageIndex - 2);
      newPages.push(pageIndex - 1);
      newPages.push(pageIndex);
      setDisplayPage(newPages);
    }
  }, [pageIndex]);


  const loadOldPage = () => {
    let newPages = [];
    newPages.push(getMinDisplayPage - 4);
    newPages.push(getMinDisplayPage - 3);
    newPages.push(getMinDisplayPage - 2);
    newPages.push(getMinDisplayPage - 1);
    setDisplayPage(newPages);
  }

  const loadNewPage = () => {
    let newPages = [];
    if (getMaxDisplayPage + 1 <= totalPage) {
      newPages.push(getMaxDisplayPage + 1);
    }
    if (getMaxDisplayPage + 2 <= totalPage) {
      newPages.push(getMaxDisplayPage + 2);
    }
    if (getMaxDisplayPage + 3 <= totalPage) {
      newPages.push(getMaxDisplayPage + 3);
    }
    if (getMaxDisplayPage + 4 <= totalPage) {
      newPages.push(getMaxDisplayPage + 4);
    }
    setDisplayPage(newPages);
  }

  const changePage = (page) => {
    setPageIndexFn(page);
  }

  const changeNavPage = (event, changeType) => {
    event.preventDefault();
    switch (changeType) {
      case 'prev': {
        if (pageIndex - 1 > 0) {
          setPageIndexFn(pageIndex - 1);
        }
        break;
      }
      case 'next': {
        if (pageIndex < totalPage) {
          setPageIndexFn(pageIndex + 1)
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  const setPageIndexFn = (page) => {
    changPage(page);
  }

  return (
    <div className="paginator">
      <ul className="pagination">
        <li className={pageIndex == 1 ? 'page-item disabled' : 'page-item'} onClick={(event) => changeNavPage(event, 'prev')}>
          <a href="#" className="page-link">
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
        <li className={pageIndex == totalPage ? 'page-item disabled' : 'page-item'} onClick={(event) => changeNavPage(event, 'next')}>
          <a href="#" className="page-link ">
            <i className="ico icon-arrow-next"></i>
          </a>
        </li>
      </ul>
    </div>
  )
});

export default ServerPaging;
