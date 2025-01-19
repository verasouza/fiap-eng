import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLessThan, faGreaterThan} from '@fortawesome/free-solid-svg-icons'

const Pagination = ({totalPosts, postsPerPage, currentPage, setCurrentPage}) => {
        let pages = [];

        const totalPages = Math.ceil(totalPosts/postsPerPage);

        for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
        }

        return (
                <div>
                        <button className='previous' onClick={() => setCurrentPage(currentPage - 1 >= totalPages ? currentPage - 1 : currentPage)}><FontAwesomeIcon icon={faLessThan}/></button>
                        {
                                pages.map((page, index) => {
                                        return <button onClick={() => setCurrentPage(page)} className={page === currentPage ? "index currentPage" : 'index' } key={index}>{page}</button>
                                })
                        }
                        <button className='next' onClick={() => setCurrentPage(currentPage + 1 <= totalPages ? currentPage + 1 : currentPage)}><FontAwesomeIcon icon={faGreaterThan} /></button>
                </div>
        );
}

export default Pagination;