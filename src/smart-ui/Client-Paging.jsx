import React, { useMemo } from 'react';

const ClientPaging = ({ total, pageSize, pageIndex, updatePaging }) => {
	const isDisplayPage = useMemo(() => !!(Math.ceil(total / pageSize) > 1), [total, pageSize]);
	const totalPage = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
	const totalPaging = () => {
		let pageNumber = [];
		for (let i = 1; i <= totalPage; i++) {
			pageNumber.push(i);
		}
		return pageNumber;
	}
	const chosenPage = (event, page) => {
		event.preventDefault();
		updatePaging(page);
	}

	const navPage = (event, type) => {
		event.preventDefault();
		if (type == 'prev') {
			if (pageIndex > 1) {
				pageIndex = pageIndex - 1;
			} else {
				pageIndex = 1;
			}
		} else {
			if (pageIndex < totalPage) {
				pageIndex = pageIndex + 1;
			} else {
				pageIndex = totalPage;
			}
		}
		updatePaging(pageIndex);
	}

	return (
		<div className="card-list__pagination">
			{isDisplayPage ?
				<div className="card-list__pagination-wrap" >
					<a href="" onClick={(event) => navPage(event, 'prev')} className={'prev-item ' + (pageIndex == 1 ? 'disabled' : '')} data-index="PREV"><i className="ico icon-arrow-prev"></i></a>
					{totalPaging().map((item, index) => (
						<a href="" onClick={(event) => chosenPage(event, item)} className={item === pageIndex ? 'active' : ''} key={index}>{item}</a>
					))}
					<a href="" onClick={(event) => navPage(event, 'next')} className={'next-item ' + (pageIndex == totalPage ? 'disabled' : '')} data-index="NEXT"><i className="ico icon-arrow-next"></i></a>
				</div> : null
			}

		</div>
	)
}

export default ClientPaging;