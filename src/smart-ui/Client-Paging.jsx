import React from 'react';

const ClientPaging = ({ total, pageSize, pageIndex }) => {
    return (
        <div className="card-list__pagination">
            <div className="card-list__pagination-wrap">
                <a href="" class="prev-item disabled" data-index="PREV"><i class="ico icon-arrow-prev"></i></a>
                <a href="" className="active">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="" class="next-item" data-index="NEXT"><i class="ico icon-arrow-next"></i></a>
            </div>
        </div>
    )
}

export default ClientPaging;